import styled from "./Loader.module.css"
const Loader = () => {
    return <div className={styled.overlay}>
    <div className={styled["overlay__inner"]}>
        <div className={styled["overlay__content"]}><span className={styled["spinner"]}></span></div>
    </div>
</div>
}
export default Loader;