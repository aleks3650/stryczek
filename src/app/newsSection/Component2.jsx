'use client'
import {usePopupStore} from '../state/store'
import CartTop from "./CartTop";

const Component1 = () => {
const {component, setComponent} = usePopupStore()
const handleClick = () => {
  setComponent(
    <div className='bg-blue-500'><h1>clicked thing</h1></div>
  )
}
const handleClear = () => {
  setComponent(null)
}
  return (
    <article>
      <CartTop />
      <div className=" bg-orange-500 mb-6 w-fit" onClick={handleClick}>click me!</div>
    </article>
  );
};

export default Component1;
