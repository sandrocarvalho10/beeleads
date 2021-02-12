import './Container.css'


const Container = (props: any) => {
  return(
    <div className="content-container">
      {props.children}
    </div>
  )
}
export default Container;