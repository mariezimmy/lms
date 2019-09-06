import IDocumentService from "./IDocumentService";
import Metadata from "../../model/Metadata";
import LitDocument from "../../model/LitDocument";

export default class TestDocumentService implements IDocumentService {
  public getDocuments(): Promise<LitDocument[]> {
    let documents = [
      new LitDocument(
        1,
        "/gherard3",
        "To my Honoured friend M. George Gherard, over against Salisbury house.",
        "SIR,\nI Do not make account that I am come to London, when I get within the wall: that which makes it London is the meeting of friends. I cannot therefore otherwise bid my self welcome to London, then by seeking of you, which both Sir H. Goodere and I do, with so much diligence, as that this messenger comes two dayes before to intreat you from us both, to reserve your self upon Saterday: so that I may, at our coming to London that night, understand at my house where I may send you word of our supping place that night, and have the honour of your company. So you lay more obligations upon\nYour poor unprofitable servant J. Donne.",
        "John Donne",
        "gherard3.png",
        new Metadata()
      ),
      new LitDocument(
        2,
        "/unknown4",
        "Unknown",
        "Though my friendship be good for nothing else, it may give you the profit of a tentation, or of an affliction: It may excuse your patience; and though it cannot allure, it shall importune you. Though I know you have many worthy friends of all rankes, yet I adde something, since I which am of none, would fain be your friend too. There is some of the honour and some of the degrees of a Creation, to make a friendship of nothing. Yet, not to annihilate my self utterly (for though it seem humblenesse, yet it is a work of as much almightinesse, to bring a thing to nothing, as from nothing) though I be not of the best stuffe for friendship, which men of warm and durable fortunes only are, I cannot say, that I am not of the best fashion, if truth and honesty be that; which I must ever exercise, towards you, because I learned it of you: for the conversation with worthy men, and of good example, (though it sow not vertue in us, yet produceth and ripeneth it. Your mans haste, and mine to Micham cuts off this Letter heve, yet, as in littell paterns torn from a whole piece, this may tell you what all I am. Though by taking me before my day (which I accoun∣ted Tuesday) I make short payment of this duty of Letters, yet I have a little comfort in this, that you see me hereby, willing to pay those debts which I can, before my time.\nYour affectionate friend J. Donne.\nFirst Saturday in March. 1607.\nYou forget to send me the Apology; and many times, I think it an injury to remember one of a promise, lest it confesse a distrust. But of the book, by occasion of reading the Deans answer to it, I have sometimes some want.",
        "John Donne",
        "unknown4.png",
        new Metadata()
      ),
      new LitDocument(
        3,
        "/white1",
        "To the worthiest Lady Mrs. Bridget White.",
        "MADAME,\nI Could make some guesse whether souls that go to heaven, retain any memory of us that stay behinde, if I knew whether you ever thought of us, since you enjoyed your heaven, which is your self, at home. Your going away hath made London a dead carkasse. A Tearm, and a Court do a little spice and embalme it, and keep it from putrefaction, but the soul went away in you: and I think the onely reason why the plague is somewhat slackned, is, because the place is dead already, and no body left worth the killing. Wheresoever you are, there is London enough: and it is a diminishing of you to say so, since you are more then the rest of the world. When you have a desire to work a miracle, you will return hither, and raise the place from the dead, and the dead that are in it; of which I am one, but that a hope that I have a room in your favour keeps me alive; which you shall abundantly confirme to me, if by one letter you tell me, that you have received my six; for now my letters are grown to that bulk, that I may divide them like Amadis the Gaules book, and tell you, that this is the first letter of the second part of the first book.\nYour humblest, and affectionate servant J. D.\nStrand S. Peters day at nine.",
        "John Donne",
        "default.png",
        new Metadata()
      ),
      new LitDocument(
        4,
        "/white2",
        "To the worthiest Lady Mrs. B. W.",
        "MADAME,\nI Think the letters which I send to you single lose themselves by the way for want of a guide, or faint for want of company. Now, that on your part there be no excuse, after three single letters, I send three together, that every one of them may have two witnesses of their delivery. They come also to waite upon another letter from Sr E. Herbert, of whose recovery from a Fever, you may apprehend a perfecter contentment then we, because you had none of the former sorrow. I am an Heretique if it be sound Doctrine, that pleasure tasts best after sorrow. For my part, I can love health well enough, though I be never sick; and I never needed my Mistris frowns and disfavours, to make her favours acceptable to me. In States, it is a weakness to stand upon a defensive war, and safer not to be invaded, then to have overcome: so in our souls health, an innocence is better then the heartiest repentance. And in the pleasures of this life, it is better that the public stat iciety o new Document (the pleasures give us the taste and appetite to it, then a sowre and sad interruption quicken our stomack; for then we live by Physick. I wish therefore all your happinesses such as this intire, and without flaw, or spot of discontentment; and such is the love and service of\nYour humblest and affectionatest servant J. D.\nStrand S. Peters day at 4.",
        "John Donne",
        "white2.png",
        new Metadata()
      ),
      new LitDocument(
        5,
        "/wotton5",
        "To Sir Henry Wotton",
        "SIR, more than kisses, letters mingle souls,\nFor thus, friends absent speak. This ease controls\nThe tediousness of my life ; but for these\nI could ideate nothing which could please ;\nBut I should wither in one day, and pass\nTo a bottle of hay, that am a lock of grass.\nLife is a voyage, and in our lives' ways\nCountries, courts, towns are rocks, or remoras ;\nThey break or stop all ships, yet our state's such,\nThat though than pitch they stain worse, we must touch.\nIf in the furnace of the raging line,\nOr under th' adverse icy pole thou pine,\nThou know'st two temperate regions, girded in,\nDwell there ; but O, what refuge canst thou win\nParch'd in the court, and in the country frozen ?\nShall cities built of both extremes be chosen ?\nCan dung or garlic be perfume ? Or can\nA scorpion or torpedo cure a man ?\nCities are worst of all three ; of all three ?\nO knotty riddle !  ; each is worst equally.\nCities are sepulchres ; they who dwell there\nAre carcases, as if no such there were.\nAnd courts are theatres, where some men play\nPrinces, some slaves, all to one end, of one clay.\nThe country is a desert, where the good,\nGain'd, inhabits not, born, is not understood.\nThere men become beasts, and prone to more evils ;\nIn cities blocks, and in a lewd court devils.\nAs in the first chaos, confusedly,\nEach element's qualities were in th' other three,\nSo pride, lust, covetise, being several\nTo these three places, yet all are in all,\nAnd mingled thus, their issue is incestuous.\nFalsehood is denizen'd ; virtue is barbarous.\nLet no man say there, “ Virtue's flinty wall\nShall lock vice in me, I'll do none, but know all.”\nMen are sponges, which, to pour out, receive ;\nWho know false play, rather than lose, deceive.\nFor in best understandings sin began,\nAngels sinn'd first, then devils, and then man.\nOnly perchance beasts sin not ; wretched we\nAre beasts in all but white integrity.\nI think if men, which in these place live,\nDurst look in themselves, and themselves retrieve,\nThey would like strangers greet themselves, seeing then\nUtopian youth grown old Italian.\n\tBe then thine own home, and in thyself dwell ;\nInn anywhere ; continuance maketh hell.\nAnd seeing the snail, which everywhere doth roam,\nCarrying his own house still, still is at home ;\nFollow—for he is easy paced—this snail,\nBe thine own palace, or the world's thy gaol.\nAnd in the world's sea do not like cork sleep\nUpon the water's face ; nor in the deep\nSink like a lead without a line ; but as\nFishes glide, leaving no print where they pass,\nNor making sound ; so closely thy course go,\nLet men dispute, whether thou breathe or no.\nOnly in this be no Galenist—to make\nCourts' hot ambitions wholesome, do not take\nA dram of country's dullness ; do not add\nCorrectives, but, as chemics, purge the bad.\nBut, sir, I advise not you, I rather do\nSay o'er those lessons, which I learn'd of you ;\nWhom, free from Germany's schisms, and lightness\nOf France, and fair Italy's faithlessness,\nHaving from these suck'd all they had of worth,\nAnd brought home that faith which you carried forth,\nI thoroughly love ; but if myself I've won\nTo know my rules, I have, and you have DONNE.",
        "John Donne",
        "default.png",
        new Metadata()
      ),
      new LitDocument(
        6,
        "/wotton6",
        "To Sir H. Wotton.",
        "Octob. the 4th 1622. almost ad midnight.\n\nSIR,\nALL our moralities are but our outworks, our Christianity is our Citadel; a man who considers duty but the dignity of his being a man, is not easily beat from his outworks, but from his Christianity never; and therefore I dare trust you, who contemplates them both. Every distemper of the body now, is complicated with the spleen, and when we were young men we scarce ever heard of the spleen. In our declinations now, every accident is accompanied with heavy clouds of melancholy; and in our youth we never admitted any. It is the spleen of the minde, and we are affected with vapors from thence; yet truly, even this sadnesse that overtakes us, and this yeelding to the sadnesse, is not so vehement a poison (though it be no Physick neither) as those false waies, in which we sought our comforts in our looser daies. You are able to make rules to your self, and our B. Saviour continue to you an ability to keep within those rules. And this particular occasion of your present sadnesse must be helped by the rule, for, for examples you will scarce finde any, scarce any that is not encombred and distressed in his fortunes. I had locked my self, sealed and secured my self against all possibilities of falling into new debts, and in good faith, this year hath thrown me 400l lower then when I entred this house. I am a Father as well as you, and of children (I humbly thank God) of as good dispositions; and in saying so, I make account that I have taken my comparison as high as I could goe; for in good faith, I beleeve yours to be so: but as those my daughters (who are capable of such considerations) cannot but see my desire to accommodate them in this world, so I think they will not murmure if heaven must be their Nunnery, and they associated to the B. virgins there: I know they would be content to passe their lives in a Prison, rather then I should macerate my self for them, much more to suffer the mediocrity of my house, and my means, though that cannot preferre them: yours are such too, and it need not that patience, for your fortune doth not so farre exercise their patience. But to leave all in Gods hands, from whose hands nothing can be wrung by whining but by praying, nor by praying without the Fiat voluntas tua. Sir, you are used to my hand, and, I think have leisure to spend some time in picking out sense, in ragges; else I had written lesse, and in longer time. Here is room for an Amen; the prayer—so I am going to my bedside to make for all you and all yours, with\n\nYour true friend and servant in Chr. Jesus \nJ. Donne.",
        "John Donne",
        "default.png",
        new Metadata()
      )
    ];

    return new Promise((resolve, reject) => resolve(documents));
  }
}
