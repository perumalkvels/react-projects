export default function Footer(){
    return(<>
    <footer class="container-fluid bg-dark">
        <div class="inside-footer container row p-5">
            <div class="col-4 foot-div1">
                <img class="footer_logo" src="https://www.codester.com/static/uploads/items/000/018/18519/preview-xl.jpg" />
            </div>
            <ul class="footlist col-8 row">
                <div class="footer-listset pl-5 col-12">
                <li class="col1">Near By</li>
                <li class="col1">Services</li>
                <li class="col1">About us</li>
                </div>
                <div class="footer-listset pl-5 col-12">
                <li class="col2">Contact us</li>
                <li class="col2">Feedbacks</li>
                <li class="col2">Products</li>
                </div>
            </ul>
        <div class="copyrights col-12 mt-5">
            <p class="text-center text-white">Copyrights @2022. All Rights Reserved </p>
        </div>
        </div>
    </footer>
    </>)
} 