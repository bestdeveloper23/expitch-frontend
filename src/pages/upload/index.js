import {
  Wrapper, Title, Player, SmallTitle, ContainerHeader, Container, UploadingBox, Button, DContainer,
  CustomSVG, UploadText, Button1, RecordingBox, RoundButton, Audio, Tabs, SubForm, Label, PitchInput, ButtonDiv, F, Required,

  TabsBox, TabButton, Divider, PitchExamples, PitchExample1, PitchExample2, PitchExample3, TitleExamples, Loading, ButtonDivUpload, CharacterCount,
  SubTitleExamples, PitchTitle, PitchButton, PitchHeader
} from './styled';

import RightArrowIcon from "../../assets/images/arrow-right.svg"
import UploadIcon from '../../assets/images/arrow-up-tray.svg'
import MicIcon from '../../assets/images/microphone.svg'
import StopRecording from '../../assets/images/stop_recording.svg'

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setFile } from '../../actions/pitch';
import { useDropzone } from 'react-dropzone';
import { useTheme } from 'styled-components';
import { i18n } from "./../../translate/i18n";
import { useRecaptcha } from '../../core/hooks/useRecaptcha';
import { useNavigate, useLocation } from 'react-router-dom';


const Upload = () => {
  const theme = useTheme();
  const location = useLocation();
  const [wizardIndex, setWizardIndex] = useState('uploading');
  const [loadingStatus, setLoadingStatus] = useState('initial');
  const [emailEnable, setEmailEnable] = useState('failed');
  const [pitchURL, setPitchURL] = useState('');
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [pitchfile, setPItchFile] = useState(null);

  const [recordedfile, setRecordedFile] = useState(null);
  const { getToken } = useRecaptcha('evaluatePitchRequest')
  const [pitchText, setPitchText] = useState(''); 
  const [pitchTextRecord, setPitchTextRecord] = useState(''); 
  const [pitchTextUpload, setPitchTextUpload] = useState(''); 
  const navigate = useNavigate();

  const { email } = useSelector((state) => state.pitch);
  // const email = location.state.email || {};
  console.log(email)
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState('uploading'); // Initialize the active tab
  const [uploadTab, setUploadTab] = useState('start');
  const [recordTab, setRecordTab] = useState('start');


  const handleTabChange = (tab) => {
    setActiveTab(tab); // Function to change the active tab
  };


  let mediaRecorder;
  let chunks = [];
  let mediaStream;
  const startRecording = () => {
    console.log('Started the recording');
    chunks = [];
    document.getElementById('stopButton').style.display = 'block';
    document.getElementById('startButton').style.display = 'none';
      
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {

      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then(function (stream) {
          mediaStream = stream;
          mediaRecorder = new MediaRecorder(stream);
          mediaRecorder.start();
          setIsRunning(true);
          setLoadingStatus('recording');
          mediaRecorder.addEventListener('dataavailable', function (e) {
            chunks.push(e.data);
          });
          
          const stopRecording = () => {
            console.log('Stopped the recording');
            mediaRecorder.stop();
            document.getElementById('stopButton').style.display = 'none';
            document.getElementById('startButton').style.display = 'block';
            setIsRunning(false);
            setLoadingStatus('completed');
            setSeconds(0);
          };

          document.getElementById('stopButton').addEventListener('click', stopRecording);

          mediaRecorder.addEventListener('stop', function () {
            const blob = new Blob(chunks, { type: 'audio/mpeg' });
            console.log(blob)
            dispatch(setFile(blob));
            const fileName = 'expitch.mp3';
            const file = convertBlobToFile(blob, fileName);
            setPItchFile(file);

            setPitchURL(URL.createObjectURL(blob));
            document.getElementById("recordingAudio").src = URL.createObjectURL(blob);
            mediaStream.getTracks().forEach((track) => {
              track.stop(); // Stop each media track
            });
            mediaStream = null; // Reset the media stream
          });
        })
        .catch(function (error) {
          console.error('Error accessing microphone:', error);
        });
    } else {
      console.log('getUserMedia is not supported in this browser');
    }
    
  };

  const handleUploadAgain = () => {
    setUploadTab('start');
  };


  const handleRecordAgain = () => {
    setRecordTab('start');
  };

  const handleAnalyzeRecord = () => {
    navigate('/waiting', { state: { email , pitchText : pitchTextRecord, pitchfile } });
  };
  const handleAnalyzeUpload = () => {
    navigate('/waiting', { state: { email , pitchText : pitchTextUpload, pitchfile } });
  };
  const handleAnalyze = () => {
    navigate('/waiting', { state: { email , pitchText, pitchfile } });
  };

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);


  useEffect(()=>
  {
    function noBack() {
      // Push the start page onto the history stack twice
      window.history.pushState({page: "startPage"}, "", window.location.href);
      window.history.pushState({page: "startPage"}, "", window.location.href);

      window.onpopstate = function(event) {
        if (event.state && event.state.page === "startPage") {
          // If we are on the start page, push it again onto the stack
          window.history.pushState({page: "startPage"}, "", window.location.href);
        }
      };
    }
    
    noBack();
    return () => {
      window.onpopstate = null;
    };

  }
  )

  const onDrop = (acceptedFiles) => {
    dispatch(setFile(acceptedFiles[0]));
    setPItchFile(acceptedFiles[0]);
    setPitchURL(URL.createObjectURL(acceptedFiles[0]));
    setWizardIndex("processing");
    setTimeout(() => {
      handleSubmitUpload(acceptedFiles[0]);

    }, 500);
  };

  const convertBlobToFile = (blob, fileName) => {
    const file = new File([blob], fileName, { type: blob.type });
    return file;
  }

  const submitAnalysis = () => {
    handleSubmitRecord(pitchfile);
  };

  const isPitchValid = pitchText.length >= 500;
  const isPitchValidRecord = pitchTextRecord.length >= 500;
  const isPitchValidUpload = pitchTextUpload.length >= 500;


  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'audio/*', multiple: false, noClick: true, });
  const handleSubmitUpload = async (file) => {
    const recaptchaToken = process.env.REACT_APP_NODE_ENV === 'development' ? '' : await getToken()
    console.log(typeof(recaptchaToken));
    const formData = new FormData();
    formData.append('email', email);
    formData.append('recaptchaToken', recaptchaToken);
    formData.append('pitchFile', file);

    try {
      setUploadTab('loading');
      const response = await fetch(`${process.env.REACT_APP_API_ENDPOINTS}/pitch/transcribePitch`, {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        setUploadTab('review');
        const result = await response.json();

        setPitchTextUpload(result.pitchText);
      } else {
        setUploadTab('review');
        setPitchTextUpload('We ran into an error while processing your file... You can try again or type your pitch here!');
        console.error('Error uploading file');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const handleSubmitRecord = async (file) => {

    const recaptchaToken = process.env.REACT_APP_NODE_ENV === 'development' ? '' : await getToken()

    const formData = new FormData();
    formData.append('email', email);
    formData.append('recaptchaToken', recaptchaToken);
    formData.append('pitchFile', file);

    try {
      setRecordTab('loading');
      const response = await fetch(`${process.env.REACT_APP_API_ENDPOINTS}/pitch/transcribePitch`, {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        setRecordTab('review');
        const result = await response.json();
        setPitchTextRecord(result.pitchText);
      } else {
        setRecordTab('review');
        setPitchTextRecord('We ran into an error while processing your file... You can try again or type your pitch here!');
        console.error('Error uploading file');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

 const handleGitLab = () => {

 const responseData = {
  "evaluation": {
      "FeatureBenefits": {
          "Evaluation": "GitLab offers a comprehensive software collaboration platform that allows companies to work together on software development. Its distinctive features include being open source, which enables users to contribute and build features quickly based on their needs. The pitch highlights that GitLab has a larger contributor base compared to its competitor, GitHub, which results in a more extensive feature set. The evidence provided, such as the number of paying customers and the use of GitLab by well-known companies like Apple and Disney, suggests significant market demand and alignment with customer expectations. Additionally, the pitch emphasizes that GitLab is more affordable for customers, combining more features with a better price. The mention of being a profitable company with a small team further demonstrates the capabilities of delivering substantial benefits. The pitch also draws on historical examples of open source solutions replacing closed source ones, implying that GitLab has the potential to replace GitHub. Overall, GitLab's product and service show promise in meeting market demand, providing unique features, and delivering value to customers.",
          "LetterGrade": "A",
          "Recommendations": "To enhance GitLab's value proposition, the startup should focus on the following recommendations:\n\n1. Expand the contributor base: GitLab should actively engage with developers and encourage them to contribute to the platform. This can be done through targeted marketing campaigns, developer meetups, and hackathons. By increasing the number of contributors, GitLab can further enhance its feature set and attract more users.\n\n2. Improve user experience: While GitLab's open-source nature is a strength, the startup should invest in improving the user experience of its platform. This includes streamlining the interface, providing intuitive documentation, and offering comprehensive support. A user-friendly platform will attract more developers and increase customer satisfaction.\n\n3. Enhance collaboration features: GitLab should continue to innovate and introduce new collaboration features that facilitate seamless teamwork and project management. This can include features like real-time code editing, integrated project management tools, and enhanced communication channels. By providing a comprehensive collaboration platform, GitLab can differentiate itself from competitors and attract more enterprise customers.\n\n4. Strengthen partnerships: GitLab should actively seek partnerships with other software development tools and platforms. By integrating with popular tools like Jira, Slack, and AWS, GitLab can provide a seamless workflow for developers and enhance its value proposition. Collaborating with industry leaders will also help GitLab gain credibility and expand its customer base.\n\n5. Invest in marketing and brand awareness: While GitLab has already gained traction in the market, it should continue to invest in marketing efforts to increase brand awareness. This can include targeted advertising, content marketing, and participation in industry events. By increasing its visibility, GitLab can attract more customers and position itself as a leader in software collaboration.\n\nOverall, by implementing these recommendations, GitLab can further strengthen its value proposition, attract more customers, and solidify its position in the software collaboration market."
      },
      "Readiness": {
          "Evaluation": "GitLab is currently in the late stage of readiness. The startup has already established itself as a leading platform for companies to collaborate on software development, with over 100,000 organizations using GitLab. This indicates a strong market demand and validation of the product. Additionally, GitLab has a strong financial stability, as evidenced by its profitable status with a team of only 10 people. The company's ability to combine more features with a better price has resonated well with customers, leading to an annual run rate of over $1 million. GitLab's open-source nature has also allowed it to leverage a large community of contributors, resulting in a faster rate of feature development compared to its competitor, GitHub. The successful adoption by companies like Apple and Disney further demonstrates the product's readiness for market entry. With its established position, financial stability, and strong customer base, GitLab is well-prepared to continue its growth and expansion in the software development industry.",
          "LetterGrade": "A+",
          "Recommendations": "To accelerate GitLab's market entry, the company should focus on three key areas. Firstly, GitLab should invest in expanding its marketing efforts to increase brand awareness and reach a wider audience. This can be achieved through targeted advertising campaigns, content marketing, and partnerships with industry influencers. Secondly, GitLab should continue to prioritize product development and innovation to stay ahead of the competition. This can be done by actively engaging with the developer community and gathering feedback to identify areas for improvement and new feature ideas. Additionally, GitLab should explore strategic partnerships and collaborations with other software development tools and platforms to enhance its offering and attract more customers. Lastly, GitLab should invest in building strong customer relationships and providing excellent customer support. This can be achieved by implementing a robust customer success program, offering personalized onboarding and training, and actively seeking feedback to continuously improve the user experience. By focusing on these recommendations, GitLab can further accelerate its market entry and solidify its position as the go-to platform for companies to collaborate on software development."
      },
      "BarrierToEntry": {
          "Evaluation": "GitLab has several barriers to entry that give it a competitive advantage in the market. One of the significant barriers is its open-source nature, which allows developers to contribute features and build the product quickly. This creates a strong community of users who are also the end users, giving GitLab a deep understanding of customer needs and preferences. Additionally, GitLab's large number of contributors (800) compared to its competitor GitHub's employee count (270) showcases the strength of its community and the ability to innovate at a faster rate. Another barrier is GitLab's affordability, as it combines more features with a better price, making it more attractive to customers. Moreover, GitLab's track record of open-source projects replacing closed-source alternatives, such as Google type being replaced by WordPress and Windows Server losing to Red Hat Linux, indicates a trend that favors GitLab over GitHub. These barriers to entry not only provide GitLab with a competitive advantage in the present but also have the potential to solidify its position in the market in the future.",
          "LetterGrade": "A",
          "Recommendations": "To enhance the barriers to entry and maintain a competitive advantage, GitLab should focus on the following recommendations. Firstly, GitLab should continue to foster and engage its strong community of developers by providing incentives for contributions and actively seeking feedback on new features. This will not only strengthen the product but also deepen the understanding of customer needs and preferences. Secondly, GitLab should invest in research and development to continuously innovate and stay ahead of competitors. This can be achieved by allocating resources to explore new technologies, improve existing features, and develop proprietary tools that are not easily replicated. Thirdly, GitLab should consider securing patents for its unique technologies and processes to protect its intellectual property and create a legal barrier for potential competitors. This will provide a strong defense against imitation and ensure the long-term profitability of the company. Lastly, GitLab should focus on enhancing its features and user experience to provide a superior product compared to its competitors. This can be achieved by conducting user research, gathering feedback, and implementing iterative improvements based on customer needs and preferences. By implementing these recommendations, GitLab can further solidify its position in the market and deter competitors from replicating its business model."
      },
      "Adoption": {
          "Evaluation": "GitLab is currently in a mature phase of adoption, as evidenced by its impressive customer base of over 100,000 organizations, including renowned companies like Apple and Disney. The fact that these organizations are paying customers further validates the necessity and value of GitLab's product. The pitch highlights that GitLab is able to ship more relevant features at a faster rate compared to its competitor, GitHub, which is supported by the substantial number of contributors (800) and the ability to quickly build features based on user feedback. The mention of GitLab's profitability with a team of only 10 people indicates strong sales growth and cost-effectiveness, which resonates with customers who appreciate the combination of more features at a better price. The annual run rate of $1 million further demonstrates the company's rapid growth. The pitch also draws on historical examples to support the claim that open source solutions tend to outperform closed source alternatives, positioning GitLab as the replacement for GitHub. Overall, GitLab's adoption trajectory is impressive, with a solid customer base, strong sales growth, and a compelling value proposition.",
          "LetterGrade": "A+",
          "Recommendations": "To propel GitLab to higher levels of market adoption, the company should focus on the following strategies:\n\n1. Expand the customer base: While GitLab has already achieved significant adoption with over 100,000 organizations, there is still room for growth. The company should target industries and sectors that have not yet fully embraced GitLab's solution. This can be done through targeted marketing campaigns, partnerships with industry influencers, and attending relevant conferences and events.\n\n2. Enhance user experience: GitLab's success is built on its ability to quickly deliver relevant features based on user feedback. To further improve the user experience, GitLab should invest in user research and usability testing. This will help identify pain points and areas for improvement, allowing the company to continuously enhance its product and stay ahead of competitors.\n\n3. Foster a strong developer community: GitLab's open-source nature is a key differentiator and a driving force behind its success. To further strengthen its position, GitLab should actively engage with its developer community. This can be done through hosting hackathons, organizing developer meetups, and providing resources and support for community-driven projects. By nurturing a vibrant developer community, GitLab can attract more contributors and ensure a steady stream of innovative features.\n\n4. Build strategic partnerships: Collaborating with other technology companies and industry leaders can significantly boost GitLab's market adoption. By integrating GitLab with popular development tools and platforms, the company can expand its reach and attract new customers. Additionally, forming partnerships with consulting firms and system integrators can help GitLab penetrate enterprise markets and drive adoption among larger organizations.\n\n5. Continuous innovation: To stay ahead in a competitive market, GitLab should prioritize continuous innovation. This includes investing in research and development, exploring emerging technologies, and staying up-to-date with industry trends. By consistently delivering new and cutting-edge features, GitLab can maintain its position as the go-to solution for companies working on software together.\n\nBy implementing these recommendations, GitLab can further accelerate its market adoption and solidify its position as the leading platform for collaborative software development."
      },
      "SupplyChain": {
          "Evaluation": "GitLab's supply chain needs are primarily focused on the distribution of its software platform. As an open-source software company, GitLab relies on a direct sales route without commercial barriers. The pitch does not provide explicit details about the current phase of its supply chain structure, but it can be inferred that GitLab has an advanced supply chain with firm commitments and active engagements. The pitch highlights GitLab's extensive user base of over 100,000 organizations, including notable customers like Apple and Disney. This indicates a robust supply chain infrastructure with a comprehensive network of channel partners. GitLab's open-source model allows developers to contribute features, ensuring a quick and efficient development process. The pitch also emphasizes GitLab's competitive advantage over GitHub, citing a larger contributor base and a more affordable pricing model. These factors contribute to GitLab's potential in establishing a resilient and efficient supply chain capable of fostering sustained growth. However, the pitch does not provide specific strategies to engage suppliers or mitigate potential risks. Further information on digital network efficiency, production workflow, customer engagement, direct marketing strategies, and quality control would be beneficial to fully assess the startup's supply chain operations and future growth potential.",
          "LetterGrade": "A+",
          "Recommendations": "Based on the evaluation, it is recommended that GitLab focuses on the following areas to bolster its supply chain. Firstly, GitLab should invest in building strong relationships with its channel partners to ensure efficient distribution of its software platform. This can be achieved through regular communication, training programs, and incentives for channel partners. Secondly, GitLab should implement a robust supplier engagement strategy to attract and retain a diverse pool of contributors. This can include providing clear guidelines for feature contributions, offering recognition and rewards for valuable contributions, and fostering a collaborative community for developers. Thirdly, GitLab should enhance its digital network efficiency by leveraging technology solutions such as automation, data analytics, and cloud-based platforms. This will streamline production workflows, improve scalability, and enable real-time monitoring of supply chain performance. Additionally, GitLab should prioritize customer engagement by actively seeking feedback, conducting user surveys, and organizing user conferences or events. This will help in understanding customer needs and preferences, leading to the development of more relevant features. Lastly, GitLab should implement a comprehensive quality control system to ensure the reliability and security of its software platform. This can involve rigorous testing procedures, vulnerability assessments, and continuous improvement processes. By focusing on these recommendations, GitLab can strengthen its supply chain operations, drive innovation, and maintain its competitive edge in the market."
      },
      "MarketSize": {
          "Evaluation": "GitLab claims to have an annual run rate of $1 million and states that they are growing rapidly. They also mention that they have over 100,000 organizations using their platform, including big names like Apple and Disney. While they do not provide explicit sales targets or data-backed forecasts, they highlight their competitive advantage over GitHub, their main competitor, by emphasizing their larger contributor base and faster feature development. This implies that they have a significant market potential. However, it is important to critically analyze the feasibility of their market projections. GitLab's strategy of leveraging open-source development and a smaller team to offer more affordable pricing is a strength that could attract customers. However, the lack of information on their customer acquisition and retention rates raises questions about the solidity of their data. Additionally, the potential risks and contingencies, such as increased competition or changes in customer preferences, should be considered. Overall, while GitLab shows promise with their current market standing and growth, further evidence and analysis are needed to determine their full market size potential.",
          "LetterGrade": "B+",
          "Recommendations": "Based on the evaluation, GitLab shows promise with their current market standing and growth. To further boost their market potential and strategies, I would recommend the following transformative recommendations. Firstly, GitLab should conduct deeper market research to establish realistic market size projections. This can be achieved by exploring niche segments or untapped opportunities within the software development industry. By identifying specific customer needs and pain points, GitLab can tailor their product offerings and marketing strategies to capture a larger market share. Additionally, GitLab should proactively identify and alleviate potential growth barriers, such as increased competition or changes in customer preferences. This can be done through continuous monitoring of the market landscape and staying agile in adapting their strategies. Furthermore, to enhance market visibility and realize a larger market potential beyond $5 million, GitLab should focus on refining their current market strategies and cultivating strategic partnerships. By collaborating with industry leaders and influencers, GitLab can increase their brand visibility and attract a wider customer base. It is also crucial for GitLab to initiate advanced dialogues with prospective allies and adjust their strategies in line with market fluctuations and customer needs. By staying responsive to market trends and customer demands, GitLab can position themselves as a market leader and achieve their sales objectives. Finally, to aim for a $20 million target, GitLab should consider implementing innovative marketing tactics, such as targeted advertising campaigns or content marketing strategies. Augmented customer interaction, through personalized customer experiences and proactive customer support, can also help in building strong customer relationships and driving customer loyalty. Additionally, GitLab should adopt agile strategies that are ready to adapt to market shifts promptly. This can be achieved through continuous monitoring of market trends and customer feedback, allowing GitLab to quickly pivot their strategies and stay ahead of the competition. Overall, by implementing these recommendations, GitLab can undergo a metamorphosis in the market size arena, setting the stage for notable growth and a strengthened market position."
      },
      "EntrepreneurExperience": {
          "Evaluation": "The team at GitLab has demonstrated strong entrepreneurial experience and a track record of success in the software development industry. The CEO, Sid, has successfully built GitLab into a profitable company with a team of 10 people, showcasing his ability to navigate the challenges of starting and growing a business. Additionally, the team's collective experience in the startup's domain is extensive, with 800 contributors and over 100,000 organizations using GitLab. This depth of experience forms a solid foundation for the startup and positions them well to address the challenges they may face. While the team's experience is primarily focused on software development, they have also leveraged transferable skills from other sectors to positively influence the business. For example, their open-source approach allows developers to contribute features and build quickly, which has proven successful in attracting users and driving growth. Overall, the team's entrepreneurial experience, industry track record, and strategic approach to leveraging their skills make them well-equipped to drive the success of GitLab.",
          "LetterGrade": "A+",
          "Recommendations": "To further bolster GitLab's entrepreneurial foundation, the team should focus on expanding their market reach and diversifying their customer base. While they have already attracted a significant number of organizations, they should explore partnerships and collaborations with other industries to tap into new markets and attract a wider range of customers. Additionally, the team should invest in continuous innovation and product development to stay ahead of competitors and maintain their position as a leader in the software development industry. This can be achieved by actively seeking feedback from users and incorporating their suggestions into future feature updates. Furthermore, the team should prioritize building a strong community around GitLab by organizing developer meetups, hackathons, and conferences. This will not only foster engagement and loyalty among existing users but also attract new developers to contribute to the platform. Lastly, the team should consider expanding their team to include individuals with expertise in marketing and business development. This will enable them to effectively communicate the value proposition of GitLab to potential customers and explore new growth opportunities. By implementing these recommendations, GitLab can further strengthen its entrepreneurial foundation and continue its rapid growth trajectory."
      },
      "FinancialExpectations": {
          "Evaluation": "GitLab's financial expectations are based on their ability to achieve cash-flow neutrality through a combination of their own investment, borrowed money, and external investor funding. The startup has demonstrated their ability to develop reliable and realistic cash-flow forecasts, backed by substantial evidence such as their current annual run rate of $1 million. They have also shown foresight in planning financing rounds, with distinct milestones corresponding to each round. This reflects an understanding of the importance of tangible achievements, such as first sales or patent approvals, in increasing the company's valuation. GitLab's readiness to sustain a steady cash flow without depleting resources prematurely is evident in their ability to bootstrap the company into profitability with a team of only 10 people. Their cash management strategies have been effective in avoiding future fundraising issues. Overall, GitLab has displayed proficiency in devising realistic cash-flow forecasts and identifying sustainable cash sources to mitigate potential deficits. With their growing customer base and the trend of open source replacing closed source, GitLab's financial expectations present a persuasive argument for achieving cash-flow neutrality and long-term success.",
          "LetterGrade": "A",
          "Recommendations": "To fortify GitLab's financial backbone, the startup should focus on diversifying their revenue streams. While their current annual run rate of $1 million is impressive, relying solely on customer subscriptions may limit their growth potential. GitLab should explore additional monetization strategies such as offering premium features or services for enterprise customers. This can help increase their average revenue per user and attract larger organizations. Additionally, GitLab should actively seek strategic partnerships with technology companies or industry leaders to leverage their brand and expand their customer base. Collaborating with established players can provide access to new markets and resources. Furthermore, GitLab should consider implementing a scalable pricing model that caters to the needs of different customer segments. This can include tiered pricing plans or usage-based pricing, allowing customers to choose the most suitable option. Lastly, GitLab should prioritize building a strong sales and marketing team to drive customer acquisition and retention. Investing in sales enablement tools, training programs, and targeted marketing campaigns can help accelerate revenue growth. By implementing these recommendations, GitLab can strengthen their financial position, increase revenue streams, and solidify their market presence."
      },
      "cost": {
          "totalPromptCost": 0.07666499999999998,
          "totalCompletionCost": 0.017636,
          "totalCost": 0.09430099999999998
      }
  },
  "pitch": {
      "_id": "652f52f3dece911ca56d1577",
      "userId": "64e3f1868dd9fa001c7c39cf",
      "pitchText": "Hi, I'm Sid, and I'm the CEO of GitLab. GitLab is how companies work on software together. Today, more than 100,000 organizations use GitLab. The logos you see are paying customers. Companies like Apple and Disney use GitLab because we ship more relevant features at a faster rate. We can do this because we're open source. Our users are developers, and they contribute the features they want to use every day. And because they are the end user, too, they know exactly what to build, and they can build it quickly. Our competitor, GitHub, has 270 employees. GitLab has 800 contributors. And that is why GitHub Enterprise has been playing catch-up to our feature set. And because our contributors are not on our payroll, we've been able to bootstrap this into a profitable company with a team of 10 people. GitLab is much more affordable for customers. Customers love that we're able to combine more features with a better price. And that is why we're already over an annual run rate of $1 million. We're growing really fast. And history shows that open source beats closed source. Google type got replaced by WordPress. Windows Server lost to Red Hat Linux. And GitHub is being replaced with GitLab. We're GitLab. We're how companies work together on software. Dimitri and I would love to talk to you. We'll be in these purple shirts. Thanks. Thanks. Let's do it again. GitLab. Thanks. Let's do it again. Thanks. Let's do it again. Thanks. ",
      "evaluationIds": [
          "652f5312dece911ca56d157a"
      ],
      "createdAt": "2023-10-18T03:37:23.700Z",
      "updatedAt": "2023-10-18T03:37:55.053Z",
      "__v": 0,
      "latestEvaluationId": "652f5312dece911ca56d157a"
  }
};
navigate('/result', { state: { responseData } });
  
 };

 const handleDoorDash = () => {

  const responseData = {
      "evaluation": {
          "FeatureBenefits": {
              "Evaluation": "DoorDash offers a distinctive feature of enabling every restaurant to deliver, providing restaurant food delivery in under 45 minutes for customers and managing the logistics of delivery for restaurant owners. The pitch highlights the underserved market where over 70% of the United States live in areas where restaurants don't deliver. DoorDash differentiates itself from services like Seamless or Grubhub by partnering with merchants and controlling the entire delivery experience. The pitch provides evidence of their success in the suburb of Palo Alto, where they have achieved better delivery times and significant growth in weekly orders. The pitch also mentions the potential to expand beyond food delivery and become the on-demand local delivery solution. DoorDash's model offers substantial advantages compared to existing solutions, aligns with customer expectations for fast and reliable delivery, and demonstrates the capabilities to deliver the promised benefits. However, further exploration is needed to understand the scalability and sustainability of their logistics model and the potential challenges in expanding beyond food delivery.",
              "LetterGrade": "A+",
              "Recommendations": "To enhance DoorDash's value proposition, the startup should consider the following recommendations. Firstly, DoorDash should focus on expanding its services to areas where restaurants are underserved and there is a high demand for food delivery. This can be achieved by conducting market research to identify potential target markets and strategically partnering with local restaurants in those areas. Secondly, DoorDash should invest in technology and infrastructure to improve its logistics model and ensure efficient and reliable delivery. This can include developing advanced routing algorithms, optimizing driver onboarding processes, and implementing real-time tracking systems for customers. Additionally, DoorDash should explore partnerships with other local businesses to expand its delivery services beyond food. This can include delivering groceries, pharmacy items, or other essential goods, thereby becoming a comprehensive on-demand local delivery solution. Lastly, DoorDash should prioritize customer satisfaction by providing excellent customer service, timely communication, and personalized experiences. This can be achieved by implementing a user-friendly mobile app, offering loyalty programs, and actively seeking feedback from customers to continuously improve their service. By implementing these recommendations, DoorDash can further differentiate itself in the market, attract more customers, and solidify its position as a leading food delivery and local delivery solution."
          },
          "Readiness": {
              "Evaluation": "DoorDash is currently in the middle phase of its startup journey. The company has already formulated its idea and navigated through the alpha and beta phases, and is now focusing on growth and expansion. There is substantial evidence that indicates DoorDash is primed for successful market entry. Firstly, the company has demonstrated financial stability by generating over $1.5 million in annualized sales for its partner restaurants. This indicates that there is a demand for their service and customers are willing to pay for it. Additionally, DoorDash has successfully conducted beta tests, as evidenced by their average delivery time of 44 minutes, which is better than their competitors. This shows that their logistics model is effective and can deliver on their promise of restaurant food delivery in under 45 minutes. Furthermore, DoorDash has shown operational readiness by building logistics software that simplifies the onboarding process for drivers, enabling them to efficiently manage their driver network. This indicates that they have the necessary infrastructure in place to support their growth. Overall, DoorDash has achieved significant milestones and has a strong foundation for market entry. With their proven track record and ongoing growth, they are well-positioned to capitalize on the underserved market of areas where restaurants don't deliver. However, it would be beneficial for DoorDash to continue addressing any supply chain issues and further validate their market by expanding into more regions and gathering customer testimonials. By maintaining their professional and solutions-focused approach, DoorDash can continue to explore the full potential of their identified readiness and solidify their position in the food delivery industry.",
              "LetterGrade": "B+",
              "Recommendations": "To accelerate DoorDash's market entry, it is recommended that they focus on three key areas. Firstly, DoorDash should continue to address any supply chain issues to ensure smooth and efficient operations. This could involve optimizing delivery routes, improving driver training, and implementing real-time tracking systems. Secondly, DoorDash should further validate their market by expanding into more regions and gathering customer testimonials. This will help build trust and credibility among potential customers and attract more restaurant partners. Lastly, DoorDash should leverage their logistics software and driver network to explore opportunities beyond food delivery. They can consider partnering with local businesses to offer on-demand delivery services for various products, such as groceries, pharmacy items, or even retail goods. This will allow DoorDash to tap into a larger market and diversify their revenue streams. By focusing on these recommendations, DoorDash can enhance their operational efficiency, strengthen their market presence, and unlock new growth opportunities."
          },
          "BarrierToEntry": {
              "Evaluation": "DoorDash has identified several significant barriers to entry in the food delivery market. One of the main barriers is their unique logistics model, which combines managing their own drivers with partnering with merchants. This model allows DoorDash to control the entire delivery experience and offer better performance at the same cost compared to their competitors. Additionally, DoorDash has developed proprietary logistics software that makes it easy for drivers to onboard into their network. This technology gives them a competitive advantage and makes it difficult for other companies to replicate their efficient delivery process. Another barrier to entry is DoorDash's established brand and customer base. They have already generated over $1.5 million in annualized sales for their partner restaurants and have experienced significant growth in weekly orders. This brand recognition and customer loyalty make it challenging for new entrants to compete with DoorDash's market presence. Overall, DoorDash's combination of unique logistics, proprietary technology, and established brand create strong barriers to entry in the food delivery market.",
              "LetterGrade": "A+",
              "Recommendations": "To enhance the barriers to entry in the food delivery market, DoorDash should focus on the following strategies. Firstly, they should continue to invest in their unique logistics model that combines managing their own drivers with partnering with merchants. This model gives them control over the entire delivery experience and allows them to offer better performance at the same cost. DoorDash should further optimize their logistics processes to ensure even faster and more efficient deliveries. Secondly, DoorDash should continue to develop and improve their proprietary logistics software. They should invest in research and development to enhance the software's capabilities and make it even easier for drivers to onboard into their network. This will make it difficult for competitors to replicate their efficient delivery process. Thirdly, DoorDash should focus on strengthening their brand and customer base. They should invest in marketing and advertising campaigns to increase brand awareness and customer loyalty. They should also provide exceptional customer service to further enhance their reputation in the market. Additionally, DoorDash should consider securing patents for their unique logistics model and proprietary technology to prevent competitors from copying their business model. They should also continue to innovate and enhance their features to stay ahead of the competition. By implementing these recommendations, DoorDash can create significant barriers to entry for both existing participants and potential new entrants in the food delivery market, ensuring their long-term profitability."
          },
          "Adoption": {
              "Evaluation": "DoorDash is currently in a mature phase of adoption, as evidenced by their substantial customer engagement and enthusiasm. The startup has successfully identified a target market that is willing to engage with their product/service, as demonstrated by their impressive sales growth and customer retention. DoorDash's unique value proposition of providing restaurant food delivery in under 45 minutes, along with managing the logistics of delivery, addresses a significant gap in the market. Their ability to partner with merchants and control the entire delivery experience has allowed them to offer the best performance at the same cost. The startup's strong adoption trajectory is further supported by their impressive growth in weekly orders, which have increased by over 30% week over week. Additionally, DoorDash has already generated over $1.5 million in annualized sales for their partner restaurants, indicating a high level of customer demand. The pitch also highlights the startup's ability to go beyond food delivery and expand into other local delivery services, showcasing their potential for further adoption and growth. Overall, DoorDash's current state of adoption is characterized by strong customer engagement, impressive sales growth, and a clear market need for their services.",
              "LetterGrade": "A+",
              "Recommendations": "To propel DoorDash to higher levels of market adoption, the startup should focus on expanding its geographical reach. While they have achieved impressive growth in the suburb of Palo Alto, there is a significant opportunity to tap into the underserved market of areas where restaurants don't deliver. DoorDash should prioritize expanding its operations to these areas, targeting cities and regions with a high population density and a strong demand for food delivery services. This can be achieved by strategically partnering with local restaurants in these areas and leveraging their existing network of drivers and logistics software. Additionally, DoorDash should invest in marketing and advertising campaigns to raise awareness about their services in these new markets. By establishing a strong presence in underserved areas, DoorDash can capture a larger market share and attract new customers who are currently unable to access restaurant food delivery. Furthermore, DoorDash should continue to innovate and explore opportunities beyond food delivery. They have already demonstrated their ability to go beyond their initial offering, and they should capitalize on this by expanding into other local delivery services such as groceries, pharmacy items, or even retail products. This will not only diversify their revenue streams but also attract a wider customer base. DoorDash should invest in research and development to enhance their logistics software and ensure seamless integration with various merchants and delivery partners. By continuously improving their technology and expanding their service offerings, DoorDash can position itself as the go-to platform for all local delivery needs, further driving market adoption and growth."
          },
          "SupplyChain": {
              "Evaluation": "DoorDash has demonstrated a comprehensive and robust supply chain infrastructure that positions them well for sustained growth. The startup's basic supply chain needs are met through a comprehensive network involving various channel partners, including restaurant owners and their own drivers. The current phase of DoorDash's supply chain structure can be considered advanced, with firm commitments and active engagements. The pitch highlights the startup's ability to manage both their own logistics and partner with merchants, which sets them apart from competitors. DoorDash's control over the entire delivery experience allows them to offer efficient and timely service at a competitive cost. The evidence provided in the pitch, such as the average 44-minute delivery time and the growth in weekly orders, showcases the effectiveness of their supply chain. DoorDash's partnership with restaurants and their logistics software further strengthens their supply chain by enabling them to expand beyond food delivery. Moving forward, DoorDash has the potential to establish a resilient and efficient supply chain capable of fostering sustained growth. It will be crucial for them to continue building strong partnerships with channel partners, implementing strategies to engage suppliers, and mitigating potential risks to ensure the success of their supply chain operations.",
              "LetterGrade": "A+",
              "Recommendations": "Based on the evaluation, I recommend that DoorDash focuses on the following areas to further strengthen their supply chain:\n\n1. Expand and diversify their network of restaurant partners: DoorDash should actively seek partnerships with a wider range of restaurants to increase their market reach and cater to a larger customer base. This can be achieved by offering attractive incentives and benefits to restaurants, such as reduced commission rates or exclusive promotional opportunities.\n\n2. Enhance driver onboarding and training processes: As DoorDash expands its driver network, it is crucial to ensure that all drivers are properly onboarded and trained. This includes providing comprehensive training on delivery protocols, customer service, and the use of the logistics software. Regular performance evaluations and feedback sessions should also be conducted to maintain high service standards.\n\n3. Continuously improve logistics software: DoorDash should invest in the ongoing development and enhancement of their logistics software to streamline operations and improve efficiency. This can include features such as real-time tracking, optimized route planning, and automated order placement systems. Regular updates and feedback from drivers and customers should be incorporated to address any pain points and improve the overall user experience.\n\n4. Implement risk management strategies: To mitigate potential risks and disruptions in the supply chain, DoorDash should develop and implement robust risk management strategies. This can involve conducting regular risk assessments, establishing contingency plans for unforeseen events, and maintaining strong relationships with alternative suppliers and logistics partners.\n\n5. Explore new delivery opportunities: Building on their success in the food delivery market, DoorDash should explore opportunities to expand their delivery services beyond food. This can include partnering with local retailers, pharmacies, or other businesses to offer on-demand delivery services. By diversifying their service offerings, DoorDash can tap into new markets and further increase their revenue potential.\n\nBy focusing on these recommendations, DoorDash can strengthen their supply chain, improve customer satisfaction, and position themselves as a leader in the on-demand delivery industry."
          },
          "MarketSize": {
              "Evaluation": "DoorDash has positioned itself as a leader in the restaurant food delivery market by offering a comprehensive solution that addresses the limitations of existing services. The startup's market analysis highlights the underserved nature of the market, with over 70% of the United States living in areas where restaurants don't deliver. This presents a significant opportunity for DoorDash to capture a substantial market share. While the pitch does not explicitly mention specific sales targets, the evidence provided suggests a strong growth trajectory. DoorDash has already generated over $1.5 million in annualized sales for its partner restaurants, indicating a solid customer base and revenue stream. The startup's growth rate of over 30% week over week further demonstrates its ability to attract and retain customers. DoorDash's strategy of managing both its own logistics and partnering with merchants sets it apart from competitors and allows for greater control over the delivery experience. This integrated approach enables DoorDash to offer faster delivery times, averaging 44 minutes between order placement and food receipt, surpassing its peers. The startup's success in a challenging suburban area like Palo Alto further validates the feasibility of its market projections. To reach its specified sales targets, DoorDash needs to continue leveraging its strengths, such as its driver network and logistics software, to expand its reach and improve operational efficiency. The startup's ability to scale its operations and maintain consistent service quality will be crucial in meeting its market potential. However, potential risks and contingencies should also be considered. Factors such as increased competition, regulatory challenges, and changing consumer preferences could impact DoorDash's growth trajectory. Overall, DoorDash has demonstrated strong market potential with its innovative approach to restaurant food delivery. By addressing the limitations of existing services and leveraging its operational capabilities, the startup has positioned itself for significant growth. However, ongoing strategic execution and adaptability will be key in realizing its full market size potential.",
              "LetterGrade": "A",
              "Recommendations": "DoorDash has demonstrated strong market potential with its innovative approach to restaurant food delivery. To further boost their market potential and strategies, DoorDash should focus on the following recommendations. Firstly, they should conduct deeper market research to identify niche segments or untapped opportunities within the restaurant food delivery market. This will allow them to expand their customer base and capture a larger market share. Additionally, DoorDash should continue leveraging their strengths, such as their driver network and logistics software, to improve operational efficiency and scale their operations. They should also proactively identify and address potential growth barriers, such as increased competition and changing consumer preferences. By refining their current market strategies and cultivating partnerships to enhance market visibility, DoorDash can position themselves for larger market potential beyond $5 million. It is crucial for DoorDash to initiate advanced dialogues with prospective allies and adjust their strategies in line with market fluctuations and customer needs. Furthermore, they should consider implementing innovative marketing tactics, augmenting customer interaction, and adopting agile strategies to adapt to market shifts promptly. These actions will enable DoorDash to aim for a $20 million target and strengthen their market position. Overall, DoorDash has the potential to undergo a notable growth and metamorphosis in the market size arena by implementing these recommendations."
          },
          "EntrepreneurExperience": {
              "Evaluation": "DoorDash has a strong entrepreneurial experience that is evident in their pitch. The team demonstrates a deep understanding of the challenges in the food delivery industry and has developed a unique solution to address them. The management team's composition is impressive, with members who have relevant experience and track records in the startup's domain. They have successfully built a network of drivers and managed the logistics of delivery, which sets them apart from their competitors. The team's cumulative experience forms a solid foundation for the startup, and there are no apparent gaps or areas needing further expertise. Additionally, the team has leveraged transferable skills from other sectors to positively influence the business. Their logistics software and driver network enable them to expand beyond food delivery and potentially disrupt the local delivery market. Overall, DoorDash's entrepreneurial experience positions them well for success in the industry.",
              "LetterGrade": "A+",
              "Recommendations": "To further bolster DoorDash's entrepreneurial foundation, the startup should focus on the following recommendations. Firstly, they should invest in expanding their network of drivers and partnering with more restaurants to increase their market reach. This will allow them to serve a larger customer base and capture a greater share of the food delivery market. Secondly, DoorDash should continue to enhance their logistics software to optimize delivery routes and improve efficiency. This will help them maintain their competitive advantage in providing fast and reliable delivery services. Additionally, the startup should explore opportunities to diversify their offerings beyond food delivery. By leveraging their driver network and logistics software, they can enter new markets such as grocery delivery or other local delivery services. This will not only increase their revenue streams but also position them as a leader in the on-demand delivery industry. Lastly, DoorDash should prioritize customer satisfaction and invest in building strong relationships with their restaurant partners. This can be achieved through regular communication, feedback mechanisms, and incentives for restaurants to join and stay on their platform. By continuously improving their service quality and maintaining strong partnerships, DoorDash can solidify their position as the go-to platform for restaurant food delivery. Overall, implementing these recommendations will further strengthen DoorDash's entrepreneurial foundation and pave the way for continued growth and success in the industry."
          },
          "FinancialExpectations": {
              "Evaluation": "DoorDash's financial expectations appear to be well-founded and demonstrate a credible route to cash-flow neutrality. The startup has developed reliable and realistic cash-flow forecasts, backed by substantial evidence such as their impressive growth in weekly orders and annualized sales of over $1.5 million. This indicates their ability to generate revenue and achieve profitability. DoorDash's financial strategies also show foresight in planning financing rounds, with distinct milestones corresponding to each round. This reflects their understanding of the importance of tangible achievements, such as increasing valuation through first sales or patent approvals. The startup's readiness to sustain a steady cash flow is evident in their successful management of logistics and driver network, which enables them to expand beyond food delivery. Their proficiency in devising realistic cash-flow forecasts and identifying sustainable cash sources is demonstrated by their ability to attract external investors and generate revenue from their own operations. Overall, DoorDash's financial expectations are promising and indicate a prosperous trajectory within a defined period.",
              "LetterGrade": "A",
              "Recommendations": "Based on the evaluation, DoorDash's financial expectations are well-founded and demonstrate a credible route to cash-flow neutrality. To fortify the startup's financial backbone, I recommend the following actions:\n\n1. Expand Market Reach: While DoorDash has shown success in the suburb of Palo Alto, it is crucial to expand into other underserved areas where restaurants don't deliver. This will tap into a larger market and increase revenue potential.\n\n2. Strengthen Partnerships: DoorDash should focus on building strong partnerships with more restaurants to increase the variety of food options available for delivery. This will attract a wider customer base and enhance customer satisfaction.\n\n3. Enhance Logistics Software: Continuously invest in improving the logistics software to optimize delivery routes, reduce delivery times, and increase efficiency. This will further differentiate DoorDash from competitors and improve overall customer experience.\n\n4. Diversify Service Offerings: While DoorDash has the potential to go beyond food delivery, it should carefully explore and diversify its service offerings. This could include partnering with local businesses for on-demand deliveries of various products, such as groceries or pharmaceuticals.\n\n5. Secure Additional Funding: As DoorDash aims to expand its operations and enter new markets, securing additional funding will be crucial. The startup should actively seek investment opportunities and present a compelling business case to attract potential investors.\n\nBy implementing these recommendations, DoorDash can solidify its financial position, drive sustainable growth, and establish itself as a leader in the on-demand delivery industry."
          },
          "cost": {
              "totalPromptCost": 0.08955000000000002,
              "totalCompletionCost": 0.017904,
              "totalCost": 0.10745400000000002
          }
      },
      "pitch": {
          "_id": "652f570ddece911ca56d158b",
          "userId": "64e3f1868dd9fa001c7c39cf",
          "pitchText": "Hi, we're DoorDash and we enable every restaurant to deliver. For customers, we offer restaurant food delivery in under 45 minutes. And for restaurant owners, we provide our own drivers and we manage the logistics of delivery. Now, you might think that food delivery is a solved problem. But if you live in Menlo Park or Palo Alto, you know that's not true. Outside of pizza joints, just about no restaurant in this area delivers. Therefore, services like Seamless or Grubhub, which merely aggregate menus but don't actually deliver, don't work. In fact, that means the market is underserved because over 70% of the United States live in areas where restaurants don't deliver. Now, there are courier services who are sending people to place takeout orders on your behalf. But because they don't partner with the merchants, they are slower and structurally more expensive. We're the only company in this space that manages both our own logistics and partners with the merchants. We figured out the model to make consumer deliveries work. Because we control the entire experience of delivery, we offer the best performance at the same cost. When an order is made in our system, it gets placed immediately at an iPad installed at the restaurant. We've also built logistics software to make it dead simple for any driver to onboard into our network. Our logistics model is winning. In over 3,500 deliveries, we've averaged 44-minute delivery times between when you place your order and when you receive your food, better than our peers. But unlike our peers who operate in the cities, we did this in the suburb of Palo Alto, an area that's much more spread out and more difficult. Because of our great service, we've grown our weekly orders by over 30% week over week. And we've already generated over $1.5 million in annualized sales for our restaurants. We figured out how to make consumer deliveries work. Our growth proves that. But what's more, our driver network and logistics software enables us to even go beyond food. If you were building the FedEx of today to manage local deliveries, deliveries wouldn't happen overnight or even same day. They would happen on demand. And that's what we're building at DoorDash. If you're interested in hearing more, please come find us afterwards. Thank you. Thank you.",
          "evaluationIds": [
              "652f572cdece911ca56d158e"
          ],
          "createdAt": "2023-10-18T03:54:53.291Z",
          "updatedAt": "2023-10-18T03:55:24.814Z",
          "__v": 0,
          "latestEvaluationId": "652f572cdece911ca56d158e"
      }
 };
 navigate('/result', { state: { responseData } });
   
  };

  const handleCoinbase= () => {

    const responseData = {       
        "evaluation": {
            "FeatureBenefits": {
                "Evaluation": "Coinbase is a startup that offers a hosted platform for Bitcoin, a new digital currency. The distinctive features of Coinbase include the ability to send money instantly, anywhere in the world, without transaction fees, and the accessibility of funds from any device. This addresses the problem of current Bitcoin tools being difficult to use and the risk of losing money due to computer loss or lack of backup. The pitch provides evidence of Coinbase's success, with a growth rate of 20% a day since its launch and a transaction volume of $65,000 worth of customer Bitcoin payments. The pitch also highlights Coinbase's advantage over existing solutions, such as PayPal, by emphasizing its faster growth rate. The significant market demand for Bitcoin is demonstrated by the increasing number of Bitcoin transactions happening globally. Coinbase aims to bring this technology to the masses and capitalize on the potential of the growing world of payments. Overall, Coinbase's features and benefits align with customer expectations for a user-friendly and secure platform for Bitcoin transactions, making it a preferential choice over alternative solutions. The pitch indicates the capabilities of Coinbase to deliver substantial benefits and tap into the potential of the Bitcoin market.",
                "LetterGrade": "A",
                "Recommendations": "To enhance Coinbase's value proposition, the startup should focus on the following recommendations:\n\n1. Improve User Experience: While Coinbase offers a user-friendly platform, there is still room for improvement. Streamlining the onboarding process and simplifying the interface will make it even easier for users to navigate and transact with Bitcoin. Additionally, providing educational resources and tutorials can help address the perceived complexity of Bitcoin and increase user confidence.\n\n2. Expand Payment Options: While Coinbase's focus is on Bitcoin, offering support for other popular cryptocurrencies can attract a wider user base. By allowing users to transact with multiple cryptocurrencies, Coinbase can position itself as a comprehensive digital currency platform.\n\n3. Enhance Security Measures: As the value of Bitcoin transactions increases, ensuring the highest level of security becomes crucial. Coinbase should invest in advanced security measures, such as multi-factor authentication and cold storage solutions, to protect user funds and build trust among potential customers.\n\n4. Foster Partnerships: Collaborating with established financial institutions and businesses can help Coinbase expand its reach and credibility. By partnering with banks or payment processors, Coinbase can facilitate seamless integration with traditional financial systems, making it easier for users to convert between Bitcoin and fiat currencies.\n\n5. Develop Mobile Applications: While Coinbase is accessible from any device, developing dedicated mobile applications for iOS and Android can further enhance the user experience and cater to the growing number of mobile users. Mobile apps can provide additional features, such as push notifications and biometric authentication, to make Bitcoin transactions more convenient and secure.\n\nBy implementing these recommendations, Coinbase can strengthen its value proposition, attract a larger user base, and solidify its position as a leading platform for digital currency transactions."
            },
            "Readiness": {
                "Evaluation": "The startup is in the early phase of readiness. The pitch highlights the innovative concept of Bitcoin and the potential of Coinbase as a platform to make it accessible to the masses. The evidence provided includes the rapid growth of Coinbase since its launch, with a 20% daily increase in users and transaction volume. The mention of processing $65,000 worth of customer Bitcoin payments further demonstrates market interest and adoption. However, there is no specific mention of financial stability or successful beta tests. Additionally, the pitch acknowledges the current difficulty of using Bitcoin and emphasizes Coinbase's solution as a hosted platform. While the pitch showcases the potential of the product, it lacks detailed information on operational readiness and supply chain issues. Overall, the startup shows promise but needs further development and validation before successful market entry.",
                "LetterGrade": "B+",
                "Recommendations": "To accelerate the startup's market entry, it is recommended to focus on the following areas:\n\n1. Financial Stability: Provide evidence of financial stability, such as securing funding or showcasing successful beta tests, to instill confidence in potential investors and users.\n\n2. Operational Readiness: Address the operational challenges associated with using Bitcoin by highlighting the measures taken by Coinbase to ensure user-friendly and secure transactions. Emphasize the ease of use and accessibility of the platform across different devices.\n\n3. Supply Chain Management: Develop a robust supply chain management strategy to ensure the availability and security of Bitcoin transactions. This includes implementing backup and recovery systems to mitigate the risk of data loss.\n\n4. Market Validation: Conduct market research to identify target demographics and their specific pain points when it comes to using Bitcoin. Tailor the pitch to address these pain points and position Coinbase as the solution to their needs.\n\n5. Partnerships and Collaborations: Explore partnerships with established financial institutions or payment processors to enhance credibility and expand the reach of Coinbase. Collaborate with industry leaders to develop innovative solutions and drive adoption.\n\nBy addressing these recommendations, the startup can enhance its readiness for market entry and position itself as a leader in the growing world of digital payments."
            },
            "BarrierToEntry": {
                "Evaluation": "Coinbase, a hosted platform for Bitcoin, has identified a significant barrier to entry in the market. The pitch highlights the current difficulty of using Bitcoin, with existing tools being desktop and command-line based. This creates a barrier for potential users who may find it challenging to navigate and secure their digital currency. Coinbase addresses this barrier by offering a user-friendly and accessible platform that can be accessed from any device, eliminating the need for complex technical knowledge and concerns about security and backups. By providing a seamless and convenient user experience, Coinbase aims to bring Bitcoin technology to the masses and commercialize it. This barrier to entry gives Coinbase a competitive advantage as it caters to a wider audience and simplifies the process of using Bitcoin, potentially discouraging new entrants who may struggle to replicate this level of accessibility and ease of use. As Coinbase continues to grow and innovate, it will be interesting to see how they further enhance their platform and maintain their competitive edge in the evolving landscape of digital currencies.",
                "LetterGrade": "A",
                "Recommendations": "To enhance the barriers to entry for potential competitors and maintain Coinbase's competitive advantage, the company should focus on the following recommendations. Firstly, Coinbase should continue to invest in user experience and interface design to make the platform even more intuitive and user-friendly. This could include streamlining the onboarding process, simplifying the navigation, and providing clear instructions and guidance for new users. Secondly, Coinbase should prioritize security and privacy features to instill trust and confidence in users. This could involve implementing advanced encryption techniques, multi-factor authentication, and regular security audits. Additionally, Coinbase should consider obtaining patents for any proprietary technology or innovative features they develop, to protect their intellectual property and deter competitors from replicating their business model. Furthermore, Coinbase should actively engage with the Bitcoin community and contribute to the development of the technology. By participating in open-source projects, attending conferences, and collaborating with other industry leaders, Coinbase can position itself as a thought leader and possess knowledge that is not easily replicated. Finally, Coinbase should explore partnerships and collaborations with established financial institutions to leverage their expertise and resources. This could involve integrating with existing banking systems, offering additional financial services, or even exploring the possibility of creating a regulated Bitcoin exchange. These recommendations, combined with Coinbase's existing strengths, will create significant barriers to entry for both existing participants and potential new entrants in the market, ensuring the startup's long-term profitability and success."
            },
            "Adoption": {
                "Evaluation": "Coinbase is currently in a nascent stage of adoption, characterized by its recent launch and rapid growth. The pitch highlights that Coinbase has grown 20% a day since its launch five weeks ago, with transaction volume also growing at a similar rate. This indicates a strong adoption trajectory and suggests that the target market is willing to engage with Coinbase's platform. The pitch also mentions that Coinbase has already processed $65,000 worth of customer Bitcoin payments, demonstrating early signs of customer engagement. Additionally, the comparison to PayPal's early days suggests that Coinbase has the potential for significant growth and adoption. However, the pitch does not provide specific evidence of customer reviews, pre-orders, or social media engagement, which are key indicators of strong adoption. It would be beneficial for Coinbase to provide more information on these aspects to further validate its adoption potential. Overall, Coinbase shows promise in its early stage of adoption, but further evidence and metrics are needed to fully evaluate its current state of adoption.",
                "LetterGrade": "B+",
                "Recommendations": "To propel Coinbase to higher levels of market adoption, the startup should focus on the following recommendations:\n\n1. Enhance customer engagement: Coinbase should actively gather customer reviews and testimonials to showcase positive experiences and build trust among potential users. Encouraging customers to share their success stories and promoting them on social media platforms can help attract new users.\n\n2. Expand marketing efforts: Coinbase should invest in targeted marketing campaigns to reach a wider audience. This can include advertising on relevant websites, partnering with influencers in the cryptocurrency space, and leveraging social media platforms to increase brand visibility.\n\n3. Improve user experience: While Coinbase offers a hosted platform for easy access to Bitcoin, it should continue to prioritize user experience and simplify the onboarding process. This can be achieved by providing intuitive interfaces, clear instructions, and educational resources to guide users through the platform.\n\n4. Strengthen security measures: Given the concerns around the security of digital currencies, Coinbase should prioritize robust security measures to instill confidence in users. Implementing multi-factor authentication, regular security audits, and transparent communication about security practices can help alleviate user concerns.\n\n5. Foster partnerships: Coinbase should explore partnerships with established financial institutions and businesses to expand its reach and credibility. Collaborating with banks or payment processors can help integrate Coinbase's services into existing financial infrastructure, making it more accessible to a wider user base.\n\nBy implementing these recommendations, Coinbase can accelerate its market adoption and establish itself as a leading platform for Bitcoin transactions."
            },
            "SupplyChain": {
                "Evaluation": "The startup pitch for Coinbase does not provide much information about its supply chain. However, based on the information provided, it can be inferred that Coinbase operates on a direct sales route without commercial barriers. The pitch emphasizes that Coinbase is a hosted platform, allowing users to access their money from any device without worrying about security or backups. This suggests that Coinbase has established a robust supply chain infrastructure to ensure seamless operations and customer satisfaction. The pitch also highlights Coinbase's rapid growth and transaction volume, indicating that the startup has made firm commitments and active engagements with its channel partners. However, the pitch does not provide specific details about Coinbase's strategies to engage suppliers or mitigate potential risks. To fully evaluate the startup's potential in establishing a resilient and efficient supply chain, more information is needed regarding its digital network efficiency, production workflow, customer engagement, direct marketing strategies, and quality control. Overall, Coinbase shows promise in leveraging its direct sales route and hosted platform to create a strong supply chain capable of fostering sustained growth.",
                "LetterGrade": "A+",
                "Recommendations": "To bolster Coinbase's supply chain, the startup should focus on the following recommendations:\n\n1. Strengthen Supplier Relationships: Coinbase should establish strategic partnerships with key suppliers to ensure a steady and reliable supply of digital currency. This can be achieved by negotiating long-term contracts, implementing supplier performance metrics, and fostering open communication channels.\n\n2. Enhance Digital Network Efficiency: Coinbase should invest in advanced technology and infrastructure to optimize its digital network. This includes upgrading servers, implementing real-time data analytics, and enhancing cybersecurity measures to ensure seamless and secure transactions.\n\n3. Streamline Production Workflow: Coinbase should analyze its production workflow to identify areas of improvement and streamline processes. This can involve automating manual tasks, implementing lean manufacturing principles, and optimizing inventory management to reduce lead times and improve overall efficiency.\n\n4. Improve Customer Engagement: Coinbase should prioritize customer satisfaction by implementing a user-friendly interface, providing responsive customer support, and offering educational resources on Bitcoin usage. This will enhance customer loyalty and attract new users to the platform.\n\n5. Implement Quality Control Measures: Coinbase should establish rigorous quality control measures to ensure the integrity and accuracy of transactions. This can involve conducting regular audits, implementing fraud detection systems, and continuously monitoring and improving the platform's security features.\n\nBy implementing these recommendations, Coinbase can strengthen its supply chain, enhance operational efficiency, and position itself as a leader in the digital currency market."
            },
            "MarketSize": {
                "Evaluation": "The startup, Coinbase, operates in the market of digital currency, specifically Bitcoin. The pitch highlights the growing popularity and potential of Bitcoin as a new form of payment. Coinbase aims to make Bitcoin more accessible and user-friendly through its hosted platform. The pitch mentions that Coinbase launched 5 weeks ago and has been growing at a rate of 20% per day, with transaction volume also growing at a similar rate. While specific sales targets are not mentioned, the evidence provided suggests a significant market potential. The pitch emphasizes the global usage of Bitcoin and the increasing number of transactions happening every minute. However, the feasibility of reaching the specified sales targets is not thoroughly discussed, and the supporting evidence is limited to growth rates and transaction volume. It would be beneficial for Coinbase to provide more quantitative data, such as revenue projections and market analysis, to strengthen their market size potential. Additionally, potential risks and contingencies that could impact Coinbase's growth should be addressed to provide a more comprehensive evaluation of their market size potential.",
                "LetterGrade": "B+",
                "Recommendations": "Based on the evaluation, Coinbase falls into the B grade category. To realize a larger market potential beyond $5 million, Coinbase should refine its current market strategies and cultivate partnerships to enhance market visibility. It is crucial for Coinbase to initiate advanced dialogues with prospective allies and adjust its strategies in line with market fluctuations and customer needs. Additionally, Coinbase should consider implementing innovative marketing tactics and augmented customer interaction to differentiate itself from competitors. Being agile and ready to adapt to market shifts promptly will also be essential for Coinbase's success. By implementing these recommendations, Coinbase can position itself for notable growth and a strengthened market position, ultimately reaching or exceeding its defined sales objectives."
            },
            "EntrepreneurExperience": {
                "Evaluation": "The pitch does not provide enough information about the team's entrepreneurial experience. It is unclear whether the team members have any direct or relevant experience in the startup's domain. The pitch focuses more on the benefits and growth of Bitcoin and Coinbase, rather than highlighting the team's expertise. Without a clear understanding of the team's background and experience, it is difficult to assess their ability to address the challenges facing the business. The pitch should provide more information about the team's industry track record, previous ventures, education, or other direct experiences applicable to the business challenges. Additionally, the pitch does not mention any strategies devised to leverage the team's experiences or highlight any unconventional yet relevant experiences that could foster business success. Overall, there is a need for more information and clarity regarding the team's entrepreneurial experience.",
                "LetterGrade": "NA",
                "Recommendations": "To bolster the startup's entrepreneurial foundation, it is crucial for the team to provide more information about their entrepreneurial experience. They should highlight their direct or relevant experience in the domain of Bitcoin and cryptocurrency. This could include their track record in the industry, previous ventures they have been involved in, relevant education or certifications, or any other experiences that demonstrate their expertise in the field. Additionally, the team should devise strategies to leverage their experiences and showcase how their unique background can contribute to the success of the business. This could involve highlighting any unconventional yet relevant experiences that set them apart from competitors. By providing a clear and compelling narrative about their entrepreneurial experience, the team can instill confidence in investors and stakeholders, and position themselves as credible and capable leaders in the industry."
            },
            "FinancialExpectations": {
                "Evaluation": "The startup's pitch does not provide sufficient information to evaluate their financial expectations. They mention that they have grown 20% a day since launching and have processed $65,000 worth of customer Bitcoin payments, but there is no mention of their revenue sources, expenses, or profitability. Without this information, it is difficult to determine if their financial projections are realistic and if they have a credible route to cash-flow neutrality. Additionally, there is no mention of their financial strategies, milestones, or cash management strategies. Overall, more information is needed to evaluate the startup's financial expectations.",
                "LetterGrade": "NA",
                "Recommendations": "Based on the evaluation of the startup's pitch, it is crucial for them to provide more information about their revenue sources, expenses, and profitability. This will help in determining the feasibility of their financial projections and their ability to achieve cash-flow neutrality. Additionally, the startup should outline their financial strategies, milestones, and cash management strategies to demonstrate a clear plan for financial success. It is recommended that they conduct a thorough analysis of their financials and develop a detailed financial plan that includes revenue projections, expense management strategies, and profitability targets. They should also consider diversifying their revenue sources and exploring potential partnerships or collaborations to enhance their financial stability. Furthermore, implementing effective cash management practices, such as monitoring and optimizing cash flow, managing working capital, and establishing financial controls, will be essential for their long-term financial health. By addressing these areas and providing a comprehensive financial plan, the startup can strengthen their financial backbone and increase their chances of success."
            },
            "cost": {
                "totalPromptCost": 0.12096300000000003,
                "totalCompletionCost": 0.015203999999999999,
                "totalCost": 0.13616700000000004
            }
        },
        "pitch": {
            "_id": "652f5881dece911ca56d159c",
            "userId": "64e3f1868dd9fa001c7c39cf",
            "pitchText": "You've probably heard a lot about Bitcoin. Tonight, I'm going to tell you what it is, and why Coinbase is the right bet to make on it. Bitcoin is a new digital currency. It lets you send money instantly, anywhere in the world, without transaction fees. And since it runs over the web, it's not controlled by any one country or company. Bitcoin is growing fast. It's already doing $2 million a day in transaction volume, and it's grown 250% this year. People all over the world are using Bitcoin to send money to their friends, to businesses, and even in the developing world. But Bitcoin has a problem. It's still too difficult to use. Current Bitcoin tools are desktop and command-line based. And if you forget to backup your computer, or you lose it, you've also lost your money. Coinbase is a hosted platform, which means you can access your money from any device. And you don't have to worry about security or backups. Coinbase is doing for Bitcoin what iTunes did to the MP3. We're bringing this technology to the masses and commercializing it. So how's it going? Coinbase launched 5 weeks ago, and has grown 20% a day since then. I would skip the how's it going. Just say, Coinbase launched, just like pow, take them through it. It's a very commanding talk, so you don't need a lot of loopy transitions. Coinbase launched 5 weeks ago, and has grown 20% a day. You should emphasize that, a day. Because usually when people say, has grown, 20%, that's followed by a week, or a month. 20% a day. You should say that, 20% a day, not month, day. Coinbase launched 5 weeks ago, and has grown 20% a day. Transaction volume has grown at a similar rate. And we've already processed $65,000 worth of customer Bitcoin payments. At its heart, Coinbase is a new payment network, built from the ground up. We're able to send money instantly, anywhere in the world, without transaction fees, because we're based on this new digital currency, Bitcoin. And we're growing faster than PayPal did in their early days. In the last 2 minutes, while you've been listening to my talk, over 100 Bitcoin transactions have happened, all over the world. There's something big happening in the world of payments. And Coinbase is going to bring it to the masses. Thank you. Boy, how do you pay money? Well, 2 ideas. One idea right now is, if you convert the money into and out of Bitcoin, it will take like 1%. Somebody else is trying to convince me to, I should charge a wall of like $0.10 on every transaction, but... People can usually make money if they have payment networks. Yeah. I think this is great. Boy. Okay. Do you think this is too nerdy, or... I wanted something that was... No, it's good. It's good. Is that an actual indication? I recorded it, but it was happening live while I recorded it, yeah. Okay. So it does not depend on the internet. It's a low drop. Yeah, it's a logarithm. Some other slides I cut out was like this one, comparing it to how, like the benefits of credit cards or ACH or wire transfers. Yeah, I didn't miss it. Okay. I had one, I thought about talking about my background or something like that, but... No, I didn't miss that either. You didn't miss it too? No. Unless you've got more time. I probably don't. If that was 2 minutes and 15 seconds, it was probably the optimal stuff to talk about for 15 minutes, for 2 minutes and 15 seconds, so... Okay. Holy shit, you're done. I mean, is this the first time I've seen your presentation? Second. It's changed a lot, obviously, since you last saw it. Huh. Did I have any comments on the first one? Well, it was really short. It didn't have a lot, like half of the content. That was really good. Okay. That's remarkable. Usually it takes more iteration than that to get it right. Well, I've been giving it to other partners and stuff, but... Yeah, I see. Alright, well, you're done as far as I'm concerned. Sweet.",
            "evaluationIds": [
                "652f5898dece911ca56d159f"
            ],
            "createdAt": "2023-10-18T04:01:05.752Z",
            "updatedAt": "2023-10-18T04:01:28.444Z",
            "__v": 0,
            "latestEvaluationId": "652f5898dece911ca56d159f"
        }
   };

   navigate('/result', { state: { responseData } });
     
    };

  return (
    <>
      <Wrapper bgcolor={theme.colors.gray50}>
        
        <ContainerHeader>
          <Title>{i18n.t("uploading.title")}</Title>
        </ContainerHeader>

        <TabsBox>
          <Tabs bordercolor={theme.colors.gray300}>
            <TabButton bgcolor={theme.colors.gray100} borderbottom={theme.colors.gray50} onClick={() => handleTabChange('uploading')} isActive={activeTab === 'uploading'}>
              {i18n.t("tabs.tab1")}
            </TabButton>
            <TabButton bgcolor={theme.colors.gray100} borderbottom={theme.colors.gray50} onClick={() => handleTabChange('pasting')} isActive={activeTab === 'pasting'}>
              {i18n.t("tabs.tab2")}
            </TabButton>
            <TabButton bgcolor={theme.colors.gray100} borderbottom={theme.colors.gray50} onClick={() => handleTabChange('recording')} isActive={activeTab === 'recording'}>
              {i18n.t("tabs.tab3")}
            </TabButton>
          </Tabs>
        </TabsBox>


        {activeTab === 'uploading' && (
          <Container>
           {uploadTab === 'loading' &&(
            <UploadingBox bordercolor={theme.colors.gray300} bgcolor={theme.colors.white}>
              <SmallTitle color='black' > Processing...</SmallTitle>
                <Loading bordercolor={theme.colors.primary} />
            </UploadingBox>
          )}

          {uploadTab === 'start' &&(
            <UploadingBox {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}
            bordercolor={theme.colors.gray300} bgcolor={theme.colors.white}>
            <input {...getInputProps()} />
            <input id="fileInput" type="file" onChange={(e) => onDrop(e.target.files)} style={{ display: 'none' }} accept=".mp3" />
            <CustomSVG src={UploadIcon} width={64} height={64}></CustomSVG>

            {
              !isDragActive ?
                <SmallTitle color="black">
                  {i18n.t("uploading.uploadingbox.hint")}
                </SmallTitle> :
                <SmallTitle color={theme.colors.primary}>
                  {i18n.t("uploading.uploadingbox.drop")}
                </SmallTitle>
            }

            <UploadText color={theme.colors.gray500}>
              {i18n.t("uploading.recording.paragraph1")}<br />{i18n.t("uploading.recording.paragraph2")}
            </UploadText>
            <Button1 onClick={() => document.getElementById('fileInput').click()} bordercolor={theme.colors.primary}
              bgcolor={theme.colors.white} color={theme.colors.gray900}>{i18n.t("uploading.submit.button")}
            </Button1>
          </UploadingBox>
          )}

          {uploadTab === 'review' &&(
            <SubForm>
            <Label color={theme.colors.gray900}>{i18n.t("pasting.textbox.label")}<Required>*</Required> </Label>
            <PitchInput type='text' bordercolor={theme.colors.gray300} bgcolor={theme.colors.white} value={pitchTextUpload} onChange={(e) => setPitchTextUpload(e.target.value)} ></PitchInput>
            <CharacterCount style={{ }}> {pitchTextUpload.length < 500 ? '❌' : '✅'} Enter at least 500 characters</CharacterCount>

            <Label color='#FF0000'></Label>
            <ButtonDivUpload>
            <Button onClick={handleUploadAgain} isenable={'valid'} bgcolor={theme.colors.white}
                bordercolor={theme.colors.primary} color={theme.colors.black}>
                    <DContainer
                      display="flex"
                      justifycontent="center"
                      alignitems="center"
                    >
                      {i18n.t("uploading.status.analysis.button2")}            
                    </DContainer>
                  </Button>
              <Button onClick={handleAnalyzeUpload}  isenable={isPitchValidUpload ? 'valid' : 'invalid'}  disabled={!isPitchValidUpload}  bgcolor={theme.colors.primary}

                bordercolor={theme.colors.primary} color={theme.colors.white}>
                    <DContainer
                      display="flex"
                      justifycontent="center"
                      alignitems="center"
                    >
                      {i18n.t("uploading.status.analysis.button")}
                      <CustomSVG src={RightArrowIcon} alt={RightArrowIcon}></CustomSVG>
                    </DContainer>
                  </Button>
                </ButtonDivUpload>
              </SubForm>
          )}
         
        
          </Container>
        )}
  
        {activeTab === 'pasting' && (
          // <Container>
          //   <SubForm>
          //       <Label color={theme.colors.gray900}>{i18n.t("pasting.textbox.label")}<Required>*</Required> </Label>
          //       <PitchInput type='text' bordercolor={theme.colors.gray300} bgcolor={theme.colors.white}></PitchInput>
          //       <Label color='#FF0000'></Label>
          //       <ButtonDiv>
          //         <Button isenable={emailEnable} bgcolor={theme.colors.primary}
          //           bordercolor={theme.colors.primary} color={theme.colors.white}>
          //               <DContainer
          //                 display="flex"
          //                 justifycontent="center"
          //                 alignitems="center"
          //               >
          //                 {i18n.t("pasting.button")}
          //                 <CustomSVG src={RightArrowIcon} alt={RightArrowIcon}></CustomSVG>
          //               </DContainer>
          //             </Button>
          //           </ButtonDiv>
          //         </SubForm>
          // </Container>
          <Container>
          <SubForm>
            <Label color={theme.colors.gray900}>{i18n.t("pasting.textbox.label")}<Required>*</Required> </Label>
            <PitchInput type='text' bordercolor={theme.colors.gray300} bgcolor={theme.colors.white} value={pitchText} onChange={(e) => setPitchText(e.target.value)} ></PitchInput>
            <CharacterCount style={{ }}> {pitchText.length < 500 ? '❌' : '✅'} Enter at least 500 characters</CharacterCount>
            <Label color='#FF0000'></Label>
            <ButtonDivUpload>
              <Button onClick={handleAnalyze}   isenable={isPitchValid ? 'valid' : 'invalid'} bgcolor={theme.colors.primary}
                bordercolor={theme.colors.primary} color={theme.colors.white} disabled={!isPitchValid} >
                    <DContainer
                      display="flex"
                      justifycontent="center"
                      alignitems="center"
                    >
                      {i18n.t("uploading.status.analysis.button")}
                      <CustomSVG src={RightArrowIcon} alt={RightArrowIcon}></CustomSVG>
                    </DContainer>
                  </Button>
                </ButtonDivUpload>
            </SubForm>
        </Container>
        )}

        {activeTab === 'recording' && (
          <Container>
                      {recordTab === 'loading' &&(
            <UploadingBox bordercolor={theme.colors.gray300} bgcolor={theme.colors.white}>
              <SmallTitle color='black' > Processing...</SmallTitle>
                <Loading bordercolor={theme.colors.primary} />
            </UploadingBox>
          )}

          {recordTab === 'start' &&(
            <RecordingBox bordercolor={theme.colors.gray300} bgcolor={theme.colors.white}>
            <UploadText color={theme.colors.gray900}>{loadingStatus === "initial" ? i18n.t("uploading.recording.button") : loadingStatus === "recording" ? i18n.t("uploading.status.recording.text") : i18n.t("uploading.status.analysis.text")}</UploadText>
            <RoundButton width={64} height={64} bordercolor={theme.colors.primary} bgcolor={theme.colors.gray50} id='startButton' onClick={() => startRecording()}>
              <CustomSVG src={MicIcon}></CustomSVG>
            </RoundButton>

            <CustomSVG width={64} height={64} src={StopRecording} id='stopButton' style={{ display: 'none' }}></CustomSVG>

            {loadingStatus === "completed" ? (
              <Player padding='0px'>
                <Audio controls id="recordingAudio">
                  <source src={pitchURL}></source>
                </Audio>
              </Player>
              
            ) : null}
            {loadingStatus === "initial" ? (<UploadText color={theme.colors.gray500}>{i18n.t("uploading.recording.hint1")}</UploadText>) :
              loadingStatus === "recording" ? (<UploadText color={theme.colors.gray900}>{Math.floor(seconds / 3600)}:{String(Math.floor((seconds % 3600) / 60)).padStart(2, '0')}:{String((seconds % 3600) % 60).padStart(2, '0')}</UploadText>) :
                (
                  <ButtonDivUpload>
                  
                            <Button isenable={'valid'} onClick={() => submitAnalysis()}  bgcolor={theme.colors.primary}
                    bordercolor={theme.colors.primary} color={theme.colors.white}>
                    <DContainer
                      display="flex"
                      justifycontent="center"
                      alignitems="center"
                    >
                      {i18n.t("uploading.status.analysis.submit")}
                      <CustomSVG src={RightArrowIcon} alt={RightArrowIcon}></CustomSVG>
                    </DContainer>
                  </Button>
                  </ButtonDivUpload>
                )
            }


            </RecordingBox>
          )}

          {recordTab === 'review' &&(
                      <SubForm>
                      <Label color={theme.colors.gray900}>{i18n.t("pasting.textbox.label")}<Required>*</Required> </Label>
                      <PitchInput type='text' bordercolor={theme.colors.gray300} bgcolor={theme.colors.white} value={pitchTextRecord} onChange={(e) => setPitchTextRecord(e.target.value)} ></PitchInput>
            <CharacterCount style={{ }}> {pitchTextRecord.length < 500 ? '❌' : '✅'} Enter at least 500 characters</CharacterCount>
                      <Label color='#FF0000'></Label>
                      <ButtonDivUpload>
                      <Button onClick={handleRecordAgain} isenable={'valid'} bgcolor={theme.colors.white}
                          bordercolor={theme.colors.primary} color={theme.colors.black}>
                              <DContainer
                                display="flex"
                                justifycontent="center"
                                alignitems="center"
                              >
                                {i18n.t("uploading.status.analysis.button3")}            
                              </DContainer>
                            </Button>
                        <Button onClick={handleAnalyzeRecord}  isenable={isPitchValidRecord ? 'valid' : 'invalid'} disabled={!isPitchValidRecord}  bgcolor={theme.colors.primary}
                          bordercolor={theme.colors.primary} color={theme.colors.white}>
                              <DContainer
                                display="flex"
                                justifycontent="center"
                                alignitems="center"
                              >
                                {i18n.t("uploading.status.analysis.button")}
                                <CustomSVG src={RightArrowIcon} alt={RightArrowIcon}></CustomSVG>
                              </DContainer>
                            </Button>
                          </ButtonDivUpload>
                        </SubForm>
                    )}

          </Container>
        )}

        <Divider color={theme.colors.gray200}></Divider>

        <Container>
          <PitchHeader>
            <TitleExamples>{i18n.t("pitchexamples.title")}</TitleExamples>
            <SubTitleExamples color={theme.colors.gray500}>{i18n.t("pitchexamples.subtitle")}</SubTitleExamples>
          </PitchHeader>

          <PitchExamples>
            <PitchExample1>
                <PitchTitle>{i18n.t("pitchexamples.pitches.pitch1")}</PitchTitle>

                <PitchButton onClick={handleGitLab} bordercolor={theme.colors.primary}> {i18n.t("pitchexamples.button")}</PitchButton>

            </PitchExample1>

            <PitchExample2>
                <PitchTitle>{i18n.t("pitchexamples.pitches.pitch2")}</PitchTitle>

                <PitchButton  onClick={handleDoorDash} bordercolor={theme.colors.primary}> {i18n.t("pitchexamples.button")}</PitchButton>

            </PitchExample2>

            <PitchExample3>
                <PitchTitle>{i18n.t("pitchexamples.pitches.pitch3")}</PitchTitle>

                <PitchButton onClick={handleCoinbase} bordercolor={theme.colors.primary}> {i18n.t("pitchexamples.button")}</PitchButton>

            </PitchExample3>
          </PitchExamples>

        </Container>
      </Wrapper>
    </>
  );
};

export default Upload;