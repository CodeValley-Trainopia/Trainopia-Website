import { LitElement, html, css } from 'lit'

export class Footer extends LitElement {
    static get styles() {
        return css``
    }

    render() {
        return html`
            <!-- Font Awesome -->
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
                rel="stylesheet"
            />
            <!-- Google Fonts -->
            <link
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                rel="stylesheet"
            />
            <!-- MDB -->
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.1/mdb.min.css"
                rel="stylesheet"
            />

            <style></style>

            <!-- Footer -->
            <footer class="bg-primary text-center text-white">
                <!-- Grid container -->
                <div class="container p-4">
                    <!-- Section: Social media -->
                    <section class="mb-4">
                        <!-- Facebook -->
                        <a
                            class="btn btn-primary btn-floating m-1"
                            style="background-color: #3b5998"
                            href="https://www.facebook.com/TrainopiaT.D"
                            role="button"
                            ><i class="fab fa-facebook-f"></i
                        ></a>

                        <!-- Instagram -->
                        <a
                            class="btn btn-primary btn-floating m-1"
                            style="background-color: #ac2bac"
                            target="”_blank”"
                            href="https://www.instagram.com/trainopia_td/"
                            role="button"
                            ><i class="fab fa-instagram"></i
                        ></a>
                    </section>
                    <!-- Section: Social media -->

                    <!-- Section: Form -->
                    

                <!-- Copyright -->
                <div
                    class="text-center p-3"
                    style="background-color: rgba(0, 0, 0, 0.2)"
                >
                    © 2020 Copyright:
                    <a class="text-white" href="https://trainopia.com/"
                        >Trainopia.com</a
                    >
                </div>
                <!-- Copyright -->
            </footer>
            <!-- Footer -->
        `
    }
}
// <!-- Google -->
// <a class="btn btn-primary btn-floating m-1" style="background-color: #dd4b39" href="#!" role="button"><i class="fab fa-google"></i></a>
// <section class="">
//                         <form action="">
//                             <!--Grid row-->
//                             <div class="row d-flex justify-content-center">
//                                 <!--Grid column-->
//                                 <div class="col-auto">
//                                     <p class="pt-2">
//                                         <strong
//                                             >Sign up for our newsletter</strong
//                                         >
//                                     </p>
//                                 </div>
//                                 <!--Grid column-->

//                                 <!--Grid column-->
//                                 <div class="col-md-5 col-12">
//                                     <!-- Email input -->
//                                     <div class="form-outline form-white mb-4">
//                                         <input
//                                             type="email"
//                                             id="form5Example2"
//                                             class="form-control"
//                                         />
//                                         <label
//                                             class="form-label"
//                                             for="form5Example2"
//                                             >Email address</label
//                                         >
//                                     </div>
//                                 </div>
//                                 <!--Grid column-->

//                                 <!--Grid column-->
//                                 <div class="col-auto">
//                                     <!-- Submit button -->
//                                     <button
//                                         type="submit"
//                                         class="btn btn-outline-light mb-4"
//                                     >
//                                         Subscribe
//                                     </button>
//                                 </div>
//                                 <!--Grid column-->
//                             </div>
//                             <!--Grid row-->
//                         </form>
//                     </section>
//                     <!-- Section: Form -->
//                 </div>
//                 <!-- Grid container -->
