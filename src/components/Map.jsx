import Iframe from "react-iframe";

const GoogleMapsIframe = () => {
    const mapSrc =
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2733.002187328469!2d23.595625075934585!3d46.764853345724944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490c23f16099c7%3A0x56e1b6e8127b2106!2sBitStone%20-%20Software%20Development%20Cluj!5e0!3m2!1sen!2sro!4v1691360039074!5m2!1sen!2sro';

    return (
        <Iframe
            url={mapSrc}
            width="90%"
            height="450px"
            frameBorder={0}
            styles={{borderRadius: '4px'}}
            id="myId"
            title={"BitStone - Software Development Cluj"}
            className="myClassname"
            display="initial"
            position="relative"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
    );
};

export default GoogleMapsIframe;