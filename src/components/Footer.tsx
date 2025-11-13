import { Instagram } from "lucide-react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-semibold gold-accent mb-4">
              Shevey Interior Design
            </h3>
            <p className="text-primary-foreground/80">
              Transforming spaces with art and elegance
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Contact</h4>
            <p className="text-primary-foreground/80 mb-2">Tijanishrif@gmail.com</p>
            <p className="text-primary-foreground/80">+234 818 101 3866</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Follow Us</h4>
            <div className="flex gap-4">
              <div className="flex gap-4">
  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary-foreground/80 hover:text-accent transition-colors"
    aria-label="Instagram"
  >
    <FaInstagram size={24} />
  </a>

  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary-foreground/80 hover:text-accent transition-colors"
    aria-label="Facebook"
  >
    <FaFacebook size={24} />
  </a>

  <a
    href="https://wa.me/message/YXLRHHQVNQFAE1"
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary-foreground/80 hover:text-accent transition-colors"
    aria-label="WhatsApp"
  >
    <FaWhatsapp size={24} />
  </a>
</div>


            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Shevey Interior Deco. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
