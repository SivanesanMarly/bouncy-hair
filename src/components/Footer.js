import { site } from "@/data/site";
export default function Footer() {
  return (
    <footer className="footer"><div className="wrap row between">
      <span>© {new Date().getFullYear()} {site.name}</span>
      <span><a href={site.justdialUrl}>Justdial</a>{site.social.instagram && <> · <a href={site.social.instagram}>Instagram</a></>}{site.social.facebook && <> · <a href={site.social.facebook}>Facebook</a></>}</span>
    </div></footer>
  );
}
