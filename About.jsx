
function About() {
  return (
    <div className="About">
      <h1>About the Project</h1>
      <div className="Existing">
        <h3>Existing</h3>
        <p>In existing systems, sign language translation is often limited to 
          software-based applications or glove-based hardware that detects hand
          movements using sensors. These systems require additional wearable devices, 
          making them less convenient and sometimes uncomfortable for users.<br/> 
          Moreover, most existing models only convert gestures into text on a display 
          without providing audio output or remote communication features. 
          The lack of integration with IoT technologies further restricts their 
          functionality, preventing real-time message transmission or wireless operation.<br/>
          As a result, existing models fail to offer a complete, interactive, and 
          accessible communication solution for speech- and hearing-impaired individuals.
        </p>
      </div>
      <div className="Proposed">
        <h3>Proposed</h3>
        <p>
          The proposed Sign Language Translator Based on Gesture-to-Words Using IoT 
          overcomes these limitations by employing a web camera to capture hand gestures 
          directly, eliminating the need for wearable sensors. <br/>
          A Raspberry Pi acts as the central controller, processing visual inputs and 
          converting gestures into meaningful words. The translated output is displayed 
          on an LCD screen and simultaneously converted into audible speech through a 
          speaker, allowing real-time communication. The system also incorporates 
          Bluetooth for wireless operation and a GSM module to send messages to
           mobile devices, enhancing accessibility and convenience. <br/>
          A push button allows users to select operation modes, making the system 
          adaptable and user-friendly. This proposed model provides an intelligent, 
          IoT-enabled, and fully automated communication bridge between sign language 
          users and the general public.

        </p>
      </div>
    </div>
  );
}

export default About;
