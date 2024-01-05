import Product from "../component/Product"
function Home(){
    return(
        <div>
             
            <h2> Welcome to the Redux Toolkit store</h2>
            <h3>shopping cart and provide functionality to increase, decrease, or remove items from the cart based on user interactions.</h3>
            <section>
                
                <Product/>
               
            </section>
        </div>
    )
}export default Home;