
export default function Header(){

    return (
        <>
        <div className="header">
            <div><img className="logo" src="/logo.svg" alt="logo" /></div>
            <div className="header-items">
                <h1>Body Mass<br/> Index Calculator</h1>
                <p> Better understand your weight in relation to your height using our 
                    body mass index (BM) calculator. While BMI is not the sole determinant 
                    of a healthy weight, it offers a valuable starting point to evaluate 
                    your overall health and well-being.</p>
            </div>
        </div>
        </>
    )
}