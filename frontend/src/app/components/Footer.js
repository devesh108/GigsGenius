export default function Footer() {
    return (
        <footer style={{ background: '#f0f0f0', padding: '2rem 1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>

                <div>
                    <h4>Company</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Information</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>

                <div>
                    <h4>Legal</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Cookies Policy</a></li>
                        <li><a href="#">Escrow/Refund Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Support</h4>
                    <p>For any queries, please mail us at:</p>
                    <a href="mailto:support@giggsgenius.com">support@giggsgenius.com</a>
                </div>

            </div>
        </footer>
    );
}