import styled from "styled-components";

const Overlay = styled.div`
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background: #0f172a;
`;
const OverlayInner = styled.div`
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const OverlayContent = styled.div`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Spinner = styled.span`
    width: 75px;
    height: 75px;
    display: inline-block;
    border-width: 2px;
    border-color: rgba(255, 255, 255, 0.05);
    border-top-color: #fff;
    animation: spin 1s infinite linear;
    border-radius: 100%;
    border-style: solid;

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = () => {
  return (
    <Overlay>
      <OverlayInner>
        <OverlayContent>
          <Spinner />
        </OverlayContent>
      </OverlayInner>
    </Overlay>
  );
};
export default Loader;
