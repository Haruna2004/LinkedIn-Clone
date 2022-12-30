import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManuaRecordIcon from "@mui/icons-material/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <a href="https://wa.me/qr/LWZJZHJ2AAOYE1">
      <div className="widgets_article">
        <div className="widgets_articleLeft">
          <FiberManuaRecordIcon />
        </div>
        <div className="widgets_articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    </a>
  );
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("HARUNA lanches Linkedin 2.0", "Top news - 9999 readers")}
      {newsArticle("Coronavirus: Uk updates", "Top news - 886 readers")}
      {newsArticle("Tesla hits new heights", "Car & auto - 300")}
      {newsArticle(
        "Bitcoin dips below $16.7K as US GDP meets fresh BTC price",
        "Crypto - 8000 reader"
      )}
      {newsArticle("Is ChatGPt too good?", "AI - 1123 readers")}
      {newsArticle(
        "Contact Faruk Haruna Let's start a project",
        "Top news - 6503 readers"
      )}
      {newsArticle(
        "Click on any article will open Faruk whatsapp dm",
        "Contact me - 6503 readers"
      )}
    </div>
  );
};

export default Widgets;
