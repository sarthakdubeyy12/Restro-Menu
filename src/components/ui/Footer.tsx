import Link from "next/link";

import { Layout, theme, Typography } from "antd";
const { Footer } = Layout;
import styles from "../../styles/footer.module.css";
const { Paragraph } = Typography;

export const FooterComponent = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Footer
      style={{ background: colorBgContainer }}
      className={styles.footerContainer}
    >
      <Link
        className={styles.footerLink}
        href="https://github.com/sarthakdubeyy12"
        target="_blank"
      >
        <Paragraph>Created by Sarthak Dubey ©2025</Paragraph>
      </Link>
    </Footer>
  );
};
