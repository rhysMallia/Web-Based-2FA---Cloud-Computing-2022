//import Image from '../elements/Image';
//import Modal from '../elements/Modal';
const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   


<div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://www.youtube.com/watch?v=N0ALppj8Anc"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/mate.png')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://www.youtube.com/watch?v=N0ALppj8Anc"
            videoTag="iframe" /> 






            <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split />



      className="illustration-section-01" 

      Welcome to <span className="text-color-primary"> Metagotchi Land</span>


      <ButtonGroup>
      <Button tag="a" color="primary" wideMobile href="https://www.google.com">
        Connect Wallet
        </Button>
      <Button tag="a" color="dark" wideMobile href="https://google.com">
        Mint NFT
        </Button>
    </ButtonGroup>