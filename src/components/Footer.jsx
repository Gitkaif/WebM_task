import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        {/* Navigation Links and Social Media */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
          <a href="#" className="hover:text-white transition-colors duration-200">
            Services
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            About
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            Contact
          </a>
          <div className="w-px h-4 bg-gray-700 hidden lg:block"></div>
          <a
            href="https://www.instagram.com/roamigo.travels?igsh=OXdoeXN1YnduNmo2"
            className="flex items-center gap-2 hover:text-white transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="hover:scale-110 transition-transform duration-200"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.703.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.942a3.917 3.917 0 0 0-.923-1.417A3.927 3.927 0 0 0 13.24 0.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h1.44c2.142 0 2.358.013 3.08.046.78.034 1.234.175 1.475.264.274.095.47.24.679.449.209.209.354.405.449.679.09.24.23.695.264 1.476.034.722.047.938.047 3.096s-.013 2.357-.046 3.08c-.034.78-.175 1.233-.264 1.475a2.37 2.37 0 0 1-.449.679c-.209.209-.405.354-.679.449-.24.09-.695.23-1.476.264-.722.032-.938.045-3.096.045s-2.357-.013-3.08-.046c-.78-.034-1.233-.175-1.475-.264a2.378 2.378 0 0 1-.679-.449c-.209-.209-.354-.405-.449-.679-.09-.24-.23-.695-.264-1.476-.032-.722-.045-.938-.045-3.096s.013-2.357.046-3.08c.034-.78.175-1.233.264-1.475.095-.274.24-.47.449-.679.209-.209.405-.354.679-.449.24-.09.695-.23 1.476-.264C5.555 1.456 5.827 1.442 8 1.442h.001z" />
              <path d="M8 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-5.8c1.18 0 2.14.96 2.14 2.14s-.96 2.14-2.14 2.14-2.14-.96-2.14-2.14 1.18-2.14 2.14-2.14z" />
              <path d="M14.25 1.4a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5z" />
            </svg>
            <span>Follow Us</span>
          </a>
        </div>

        {/* Separator Line */}
        <hr className="border-gray-700 my-6" />

        {/* Copyright Info */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            © 2025 Roamigo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
