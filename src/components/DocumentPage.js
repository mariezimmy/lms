import React, { Component } from "react";
import "./DocumentPage.css";
import "../App.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

class DocumentPage extends Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <h1>To the same.</h1>
          <br />
          <p className="Text">
            <p> SIR, </p>
            It is in our State ever held for a good sign to change Prison, and
            nella Signoria de mi, I will think it so, that my sicknesse hath
            given me leave to come to my London-prison. I made no doubt but my
            entrance-pain (for it was so rather then a sicknesse, but that my
            sadnesse putrefied and corrupted it to that name) affected you also;
            for nearer Contracts then generall Christianity, had made us so much
            towards one [another], that one part cannot escape the distemper of
            the other. I was therefore very carefull, as well to slack any
            sorrow which my danger might occasion in you; as to give you the
            comfort of having been heard in your prayers for me, to tell you as
            soon as my pain remitted what steps I made towards health, which I
            did last week. This Tuesday morning your man brought me a Letter,
            which (if he had not found me at London) I see he had a hasty
            commandment to have brought to Micham. Sr, though my fortune hath
            made me such as I am, rather a sicknesse and disease of the world
            then any part of it, yet I esteemed my self so far from being so to
            you, as I esteemed you to be far from being so of the world, as to
            measure men by fortune or events. I am now gone so far towards
            health, as there is not infirmity enough left in me for an assurance
            of so much noblenesse and truth, as your last Letter is to work
            upon, that might cure a greater indisposition then I am now in: And
            though if I had died, I had not gone without testimonies of such a
            disposition in you towards the reparation of my fortune, or
            preservation of my poor reputation; yet I would live, and be some
            such thing as you might not be ashamed to love. Your man must send
            away this hour in which he visits me; and I have nothing to say
            which should make me grudge this straitnesse of time. He tels me he
            sends again upon Thursday, and therefore I will make an end of this
            Letter, and perfect it then. I doubt my Letters have not come duly
            to your hand, and that I writing in my dungeon of Michim without
            dating have made the Chronologie and sequence of my Letters
            perplexed to you; howsoever you shall not be rid of this Ague of my
            Letters, though perchance the fit change daies. I have received in a
            narrow compasse three of yours, one with the Catalogue of your
            Books, another I found here left last Saterday by your man, and this
            which he brought me this morning. Sir, I dare sit no longer in my
            wastcoat, nor have any thing worth the danger of a relapse to write.
            I owe you so much of my health, as I would not mingle you in any
            occasion of repairing it, and therefore here ask leave to kisse your
            hands, and bid you good morrow and farewell.
            <br />
            <br />
            <p>
              {" "}
              Your very true friend and servant <br />
              J. Donne.
            </p>
          </p>
        </Container>
      </Jumbotron>
    );
  }
}
export default DocumentPage;
