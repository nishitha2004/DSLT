function Home() {
  return (
    <div className="Home">
      <h1>Development of Sign Language Translator</h1>
      <div className="Abstract">
        <h3>Abstract</h3>
        <p>
          The development of sign language translator based on gestures-to-words
           by using IOT aims to bridge the communication gap between speech-impaired 
           individuals and the general public through an intelligent, 
           IoT-enabled translation system.<br/>
          The prototype utilizes a Raspberry Pi as the central controller, 
          integrated with a web camera to capture and recognize hand gestures representing 
          sign language. These gestures are processed and converted into corresponding text,
           which is displayed on an LCD screen, and further translated into audible speech 
           output through a speaker.<br/>
          A push button is incorporated to set operational modes, while a Bluetooth 
          module enables wireless communication and control. Additionally, a GSM module 
          is employed to send translated messages to mobile devices, enhancing accessibility 
          and real-time communication. This system provides an efficient and user-friendly 
          solution for assisting individuals with hearing and speech disabilities, 
          promoting inclusivity and seamless interaction in both personal and public 
          environments

        </p>
      </div>
      <div className="Algorithms">
         <h3>Algorithms</h3>
         <p>
          IoT Alert Notification Algorithm<br/>
           When a valid hand gesture is recognized, the system converts it into text and 
           triggers an alert. The alert message is sent to the registered user through  
           GSM/SMS or IoT cloud notification.<br/>
          IoT Communication Algorithm<br/>
          The Raspberry Pi communicates with the camera to capture gestures and 
          processes them locally. Processed data is shared with output devices (LCD, 
          speaker, GSM) using IoT communication protocols.

         </p>
      </div>
    </div>
  );
}

export default Home;
