export function Card() {
    return (
        <div className="main-container">
            <div className="cards">
                <div className="head">
                    <p className="worth">FREE</p>
                    <p className="rate"><span className="price">$0</span>/month</p>
                </div>
                <div className="points">
                    <ul className="list-items">
                        <li class="adv"><span>✔ &nbsp; &nbsp; </span>Single User</li>
                        <li class="adv"><span>✔ &nbsp; &nbsp; </span>5GB Storage</li>
                        <li class="adv"><span>✔ &nbsp; &nbsp; </span>Unlimited Public Projects</li>
                        <li class="adv"><span>✔ &nbsp; &nbsp; </span>Community Access</li>
                        <li class="adv disabled"><span>✖ &nbsp; &nbsp; </span>Unlimited Private Projects</li>
                        <li class="adv disabled"><span>✖ &nbsp; &nbsp; </span>Dedicated Phone Support</li>
                        <li class="adv disabled"><span>✖ &nbsp; &nbsp; </span>Free Subdomain</li>
                        <li class="adv disabled"><span>✖ &nbsp; &nbsp; </span>Monthly Status Reports</li>
                    </ul>
                </div>
                <div className="btn">
                    <button>Add to Cart</button>
                </div>
            </div>
            <div className="cards">
                <div className="head">
                    <p className="worth">PLUS</p>
                    <p className="rate"><span className="price">$9</span>/month</p>
                </div>
                <div className="points">
                    <ul className="list-items">
                        <li class="adv"><span>✔ &nbsp; &nbsp;</span><strong>5 User</strong></li>
                        <li class="adv"><span>✔ &nbsp; &nbsp;</span>50GB Storage</li>
                        <li class="adv"><span>✔ &nbsp; &nbsp;</span>Unlimited Public Projects</li>
                        <li class="adv"><span>✔ &nbsp; &nbsp;</span>Community Access</li>
                        <li class="adv"><span>✔ &nbsp; &nbsp;</span>Unlimited Private Projects</li>
                        <li class="adv"><span>✔ &nbsp; &nbsp;</span>Dedicated Phone Support</li>
                        <li class="adv"><span>✔ &nbsp; &nbsp;</span>Free Subdomain</li>
                        <li class="adv disabled"><span>✖ &nbsp; &nbsp;</span>Monthly Status Reports</li>
                    </ul>
                </div>
                <div className="btn">
                    <button>Add to Cart</button>
                </div>
            </div>
            <div className="cards">
                <div className="head">
                    <p className="worth">PRO</p>
                    <p className="rate"><span className="price"> $49</span>/month</p>
                </div>
                <div className="points">
                    <ul className="list-items">
                        <li class="adv"><span>✔ &nbsp; &nbsp;</span><strong>Unlimited Users</strong></li>
                        <li class="adv"><span>✔ &nbsp; &nbsp;</span>150GB Storage</li>
                        <li class="adv"><span>✔ &nbsp; &nbsp;</span>Unlimited Public Projects</li>
                        <li class="adv"><span>✔ &nbsp; &nbsp;</span>Community Access</li>
                        <li class="adv"><span>✔ &nbsp; &nbsp;</span>Unlimited Private Projects</li>
                        <li class="adv"><span>✔ &nbsp; &nbsp;</span>Dedicated Phone Support</li>
                        <li class="adv"><span>✔ &nbsp; &nbsp;</span><strong>Unlimited</strong> Free Subdomain</li>
                        <li class="adv"><span>✔ &nbsp; &nbsp;</span>Monthly Status Reports</li>
                    </ul>
                </div>
                <div className="btn">
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}