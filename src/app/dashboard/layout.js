export default function RootLayout({ children }) {
    return (
        <html lang="en">

            <body>
                {children}
            </body>

            <script src="@/assets/js/core/popper.min.js"></script>
            <script src="@/assets/js/core/bootstrap.min.js"></script>
            <script src="@/assets/js/plugins/perfect-scrollbar.min.js"></script>
            <script src="@/assets/js/plugins/smooth-scrollbar.min.js"></script>
            <script src="@/assets/js/plugins/chartjs.min.js"></script>
            <script src="@/assets/js/argon-dashboard.min.js?v=2.1.0"></script>
        </html>
    );
}
