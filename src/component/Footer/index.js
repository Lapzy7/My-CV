import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Footer = () => {
  const [footer, setFooter] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const footerRef = ref(db, "footer/title");

    onValue(footerRef, (snapshot) => {
      const data = snapshot.val();
      setFooter(data);
    });
  }, []);

  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <h4>{footer.title}</h4>
        <ul className="contact-list">
          <li>
            <a
              href="tel:+6281234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`data:image/jpeg;base64, ${footer.phone}`}
                alt="Phone"
                className="contact-icon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/dknz._"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`data:image/jpeg;base64, ${footer.instagram}`}
                alt="Phone"
                className="contact-icon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Lapzy7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`data:image/jpeg;base64, ${footer.github}`}
                alt="Phone"
                className="contact-icon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com/share/14Lr4WYsCx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`data:image/jpeg;base64, ${footer.facebook}`}
                alt="Phone"
                className="contact-icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
