import FuzzyText from './FuzzyText';

const ErrorPage = () => {
  const hoverIntensity = 0.5;
  const enableHover = true;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'white',
        zIndex: 1000,
        backgroundColor: '#000000',
        gap: '5rem',
      }}
    >
      <div>
        <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={hoverIntensity}
          enableHover={enableHover}
          color="#ffffff"
          fontSize="clamp(11rem, 20vw, 25rem)"
        >
          404
        </FuzzyText>
      </div>

      <div>
        <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={hoverIntensity}
          enableHover={enableHover}
          color="#ffffff"
          fontSize="clamp(3rem, 8vw, 12rem)"
        >
          not found
        </FuzzyText>
      </div>
    </div>
  );
};

export default ErrorPage;
