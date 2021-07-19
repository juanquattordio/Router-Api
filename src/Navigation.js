import { Link } from 'react-router-dom'


function Navigation() {
    return (
        <>
            <div>
                <button>
                    <Link to="/">Home</Link>
                </button>
                <button>
                    <Link to="/books">Books</Link>
                </button>
                <button>
                    <Link to="/products">Products</Link>
                </button>
            </div>
        </>
    )

}
export default Navigation