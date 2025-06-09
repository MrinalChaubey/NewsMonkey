import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "bild",
        name: "Bild",
      },
      author: "Paul  van Bürck",
      title:
        "NBA-Playoffs 2025 live: Spielplan, Termine, TV, Modus, Teams, alle Infos | Sport",
      description:
        "Die NBA-Playoffs sind in vollem Gange! Wer ist dabei und wer überträgt live im TV? BILD hat alle Infos.",
      url: "https://www.bild.de/sport/mehr-sport/nba-playoffs-2025-live-spielplan-termine-tv-modus-teams-alle-infos-67ff9cf13ceb7108c493a816",
      urlToImage:
        "https://images.bild.de/67ff9cf13ceb7108c493a816/d222ec28e036af487323fa40d1232d50,d9c97599?w=1280",
      publishedAt: "2025-06-06T08:31:45Z",
      content:
        "Es wird immer spannender!\r\nDie reguläre NBA-Saison 2024/25 ist Geschichte und die Playoffs sind in vollem Gange. In 82 Spielen haben 16 Teams so viele Siege wie möglich gesammelt, um sich eine gute A… [+4583 chars]",
    },
    {
      source: {
        id: "die-zeit",
        name: "Die Zeit",
      },
      author:
        "https://www.zeit.de/autoren/A/Fabian_Albrecht/index, https://www.zeit.de/autoren/E/Alexander_Eydlin/index, https://www.zeit.de/autoren/G/Mathis_Gann/index",
      title:
        "Liveblog Ukrainekrieg: Ukraine meldet zweitgrößten Luftangriff seit Kriegsbeginn",
      description:
        "Russland attackierte mehrere Städte mit mehr als 400 Drohnen und Dutzenden Marschflugkörpern. Ukraine trifft offenbar großes Munitionslager in Russland. Das Liveblog",
      url: "https://www.zeit.de/politik/ausland/ukraine-krieg-news-liveblog",
      urlToImage:
        "https://img.zeit.de/politik/ausland/2025-06/ukraine-krieg-news-liveblog-bild-11/wide__1300x731",
      publishedAt: "2025-06-06T08:15:46+00:00",
      content:
        "Russland hat die Ukraine nach Angaben der Militärführung in Kyjiw mit insgesamt 452 Flugkörpern angegriffen. Die Attacke wäre somit die zweitgrößte seit Kriegsbeginn, nachdem es am Sonntag zum größte… [+908 chars]",
    },
    {
      source: {
        id: "der-tagesspiegel",
        name: "Der Tagesspiegel",
      },
      author: "Ole Hamisch",
      title:
        "Basketball-Tipps der Wagner-Brüder: Was Jugendspieler von Alba Berlin beim NBA-Team der Orlando Magic erlebten",
      description:
        "Einmal die deutschen NBA-Stars Franz und Moritz Wagner treffen und sogar Tipps von Ihnen bekommen? Für einige Jugendspieler von Alba Berlin ging dieser Traum in Erfüllung.",
      url: "https://www.tagesspiegel.de/sport/basketball-tipps-der-wagner-bruder-was-jugendspieler-von-alba-berlin-beim-nba-team-der-orlando-magic-erlebten-13801339.html",
      urlToImage:
        "https://www.tagesspiegel.de/images/11543069/alternates/BASE_16_9_W1400/1713521373000/franz-wagner-und-moritz-wagner.jpeg",
      publishedAt: "2025-06-06T08:10:33+00:00",
      content:
        "Der Traum eines jeden jungen und talentierten Basketballers ist es, in der NBA zu spielen. Alba ermöglichte es im Rahmen eines Schüleraustausches einigen Nachwuchsspielern, ganz nah an der amerikanis… [+5829 chars]",
    },
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: null,
      title:
        "NBA Finals: Tyrese Haliburton gives Indiana Pacers win over Oklahoma City Thunder in game one",
      description:
        "Tyrese Haliburton scores in the final second as the Indiana Pacers snatch victory against the Oklahoma City Thunder in game one of the NBA Finals.",
      url: "http://www.bbc.co.uk/sport/basketball/articles/cz6326l2ngno",
      urlToImage:
        "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/d7ce/live/15433c10-429a-11f0-8524-7dd960a9803b.jpg",
      publishedAt: "2025-06-06T07:37:26.7161434Z",
      content:
        "Tyrese Haliburton scored in the final second as the Indiana Pacers snatched victory over the Oklahoma City Thunder in game one of the NBA Finals.\r\nHis 21-foot shot put the Pacers in front for the fir… [+1538 chars]",
    },
    {
      source: {
        id: "der-tagesspiegel",
        name: "Der Tagesspiegel",
      },
      author: "Der Tagesspiegel",
      title:
        "Polizeieinsatz in Berlin: 22-Jährige offenbar mit Messer in ihrer Wohnung angegriffen",
      description:
        "Ein Unbekannter sticht eine 22-Jährige offenbar in ihrer Wohnung in der Frankfurter Allee nieder. Zu dem Vorfall gibt es viele offene Fragen.",
      url: "https://www.tagesspiegel.de/berlin/polizeieinsatz-in-der-frankfurter-allee-frau-offenbar-mit-messer-in-berliner-wohnung-angegriffen-13812652.html",
      urlToImage:
        "https://www.tagesspiegel.de/images/13812610/alternates/BASE_16_9_W1400/1749187888000/polizeieinsatz-nach-einbruch-in-einkaufszentrum.jpeg",
      publishedAt: "2025-06-06T05:40:32+00:00",
      content:
        "Ein Unbekannter soll eine 22 Jahre alte Frau in ihrer Wohnung in der Frankfurter Allee in Berlin-Lichtenberg mit einem Messer angegriffen haben. Das teilte die Berliner Polizei mit. Die BZ hatte zuer… [+1956 chars]",
    },
    {
      source: {
        id: "espn",
        name: "ESPN",
      },
      author: "Tim MacMahon",
      title:
        "Thunder drop Game 1 of NBA Finals, but loss 'not an end point' - ESPN",
      description:
        "After Thursday night's dramatic loss, the Thunder pointed to their collapse against the Nuggets in Round 2 as proof that they can bounce back from heartbreaking Game 1 setbacks.",
      url: "https://www.espn.com/nba/story/_/id/45462292/thunder-drop-game-1-nba-finals-loss-not-end-point",
      urlToImage:
        "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2025%2F0606%2Fr1503214_1296x729_16%2D9.jpg",
      publishedAt: "2025-06-06T05:38:00Z",
      content:
        "OKLAHOMA CITY -- For better or worse, the Oklahoma City Thunder had an eerily familiar feeling when the final buzzer sounded Thursday night.\r\nThe Indiana Pacers had stolen Game 1 of the NBA Finals, t… [+5051 chars]",
    },
    {
      source: {
        id: "fox-sports",
        name: "Fox Sports",
      },
      author: "Melissa Rohlin",
      title:
        "NBA Finals Game 1 Takeaways: Pacers shock Thunder on Haliburton's game winner",
      description:
        "The Indiana Pacers beat the Oklahoma City Thunder 111-110 in Game 1 of the 2025 NBA Finals. Here are your takeaways!",
      url: "https://www.foxsports.com/stories/nba/nba-finals-thunder-take-game-1",
      urlToImage:
        "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2025/06/1408/814/thunder_horizontal.jpg?ve=1&tl=1",
      publishedAt: "2025-06-06T03:55:54Z",
      content:
        "The NBA Finals are here, with No. 1 seed Oklahoma City Thunder and the No. 4 seed Indiana Pacers squaring off with the hope of lifting their first-ever Larry OBrien trophy at the end of the highly-an… [+2931 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Kyle Feldscher",
      title:
        "Tyrese Haliburton caps off another epic comeback with last-second shot as Indiana stuns OKC in Game 1 of the NBA Finals",
      description:
        "Tyrese Haliburton ensured yet another fanbase will see him in their nightmares after he drained a shot in the final second of Game 1 of the NBA Finals on Thursday, giving his team an incredibly unlikely 111-110 victory.",
      url: "https://www.cnn.com/2025/06/05/sport/nba-finals-game-1-indiana-pacers-oklahoma-city-thunder-spt",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2218138084.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2025-06-06T03:47:51Z",
      content:
        "Tyrese Haliburton ensured yet another fanbase will see him in their nightmares after he drained a shot in the final second of Game 1 of the NBA Finals on Thursday, giving his team an incredibly unlik… [+8951 chars]",
    },
    {
      source: {
        id: "fox-sports",
        name: "Fox Sports",
      },
      author: null,
      title:
        "New York Knicks next head coach odds: Who will take over for Tom Thibodeau?",
      description:
        "The Knicks need a new coach. Will they go with a proven name, or introduce a fresh face into the NBA head coaching pool? Check out the odds.",
      url: "https://www.foxsports.com/stories/nba/new-york-knicks-next-head-coach-odds",
      urlToImage:
        "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2025/06/1408/814/bryant-65.jpg?ve=1&tl=1",
      publishedAt: "2025-06-06T03:37:08Z",
      content:
        "Fresh off an Eastern Conference finals berth, the New York Knicks are in search of a new head coach.\r\nThe Knicks fired head coach Tom Thibodeau on Tuesday after five seasons. \r\nAnd with that, the hir… [+1790 chars]",
    },
    {
      source: {
        id: "fox-sports",
        name: "Fox Sports",
      },
      author: null,
      title:
        "Tyrese Haliburton hits game-winning jumper to shock Thunder in Game 1",
      description:
        "Tyrese Haliburton made a jump shot with 0.3 seconds left to lift the Indiana Pacers over the Oklahoma City Thunder 111-110 in Game 1 of the NBA Finals.",
      url: "https://www.foxsports.com/stories/nba/tyrese-haliburton-does-again",
      urlToImage:
        "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2025/06/1408/814/hali_horizontal.jpg?ve=1&tl=1",
      publishedAt: "2025-06-06T03:31:56Z",
      content:
        "Tyrese Haliburton hit a mid-range jumper with 0.3 seconds remaining to lift the Indiana Pacers over the Oklahoma City Thunder in Game 1 of the NBA Finals. \r\nHaliburton's pull-up from the right elbow … [+923 chars]",
    },
    {
      source: {
        id: "espn",
        name: "ESPN",
      },
      author: null,
      title:
        "Pacers sink Thunder on Tyrese Haliburton's last-second shot - ESPN",
      description:
        "Tyrese Haliburton scored with 0.3 seconds left for Indiana's first and only lead of the game and the Pacers beat the Thunder 111-110 in Game 1 of the NBA Finals.",
      url: "https://www.espn.com/nba/story/_/id/45461714/pacers-sink-thunder-tyrese-haliburton-last-second-shot",
      urlToImage:
        "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2025%2F0606%2Fr1503182_1296x729_16%2D9.jpg",
      publishedAt: "2025-06-06T03:29:09Z",
      content:
        "OKLAHOMA CITY -- Tyrese Haliburton scored with 0.3 seconds left for Indiana's first and only lead of the game and the Pacers, the last-minute comeback kings of these playoffs, did it again to beat th… [+2030 chars]",
    },
    {
      source: {
        id: "fox-sports",
        name: "Fox Sports",
      },
      author: null,
      title:
        "2025 NBA championship odds: Thunder still favored after Pacers take 1-0 lead",
      description:
        "The NBA Finals have been determined. Check out the NBA title odds with the championship series set to begin Thursday.",
      url: "https://www.foxsports.com/stories/nba/2024-25-nba-finals-odds-team-futures",
      urlToImage:
        "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2024/07/1408/814/15f392eb-thunder-718.png?ve=1&tl=1",
      publishedAt: "2025-06-06T03:24:18Z",
      content:
        "It's time for the NBA Finals.\r\nHere's a look at the NBA title odds at DraftKings Sportsbook as of June 6, now that Game 1 is in the books.\r\n2025 NBA Finals odds\r\nOklahoma City Thunder: -330 (bet $10 … [+1114 chars]",
    },
    {
      source: {
        id: "espn",
        name: "ESPN",
      },
      author: "ESPN staff",
      title:
        "Caitlin Clark, Mahomes top reactions to Haliburton's Game 1 winner - ESPN",
      description:
        "Tyrese Haliburton's go-ahead basket to win Game 1 of the 2025 NBA Finals shocked social media.",
      url: "https://www.espn.com/nba/story/_/id/45461709/tyrese-haliburton-game-winning-shot-reaction-nba-finals-2025-mahomes-clark-magic-johnson",
      urlToImage:
        "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2025%2F0606%2Fr1503182_1296x729_16%2D9.jpg",
      publishedAt: "2025-06-06T03:10:00Z",
      content:
        "The Indiana Pacers have done it again.\r\nEditor's Picks\r\nAfter trailing by 15 points in the fourth quarter of Game 1 of the NBA Finals against the Oklahoma City Thunder, the Pacers stormed back to win… [+2128 chars]",
    },
    {
      source: {
        id: "espn",
        name: "ESPN",
      },
      author: "Tim Bontemps",
      title:
        "Adam Silver expects NBA owners to urge 'formal' expansion talks - ESPN",
      description:
        'NBA commissioner Adam Silver said he believes there is enough interest among league owners to begin "a more formal exploratory phase" of expansion.',
      url: "https://www.espn.com/nba/story/_/id/45461391/adam-silver-expects-nba-owners-urge-formal-expansion-talks",
      urlToImage:
        "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2025%2F0606%2Fr1503147_1296x729_16%2D9.jpg",
      publishedAt: "2025-06-06T02:05:00Z",
      content:
        "OKLAHOMA CITY -- NBA commissioner Adam Silver said Thursday night that the NBA will discuss expansion at next month's Board of Governors meeting in Las Vegas and believes the league's owners will rec… [+4789 chars]",
    },
    {
      source: {
        id: "news24",
        name: "News24",
      },
      author: "Sponsored Content",
      title: "The Story Behind Your Cup: Exploring Coffee Origins",
      description: "By Domaine Rautenbach, Senior Brand Manager at Jacobs",
      url: "https://www.news24.com/brandstory/partner-content/the-story-behind-your-cup-exploring-coffee-origins-20250521-0632",
      urlToImage:
        "https://news24cobalt.24.co.za/resources/0299-1dcf194c3bbc-575e5ddc06cd-1000/format/inline/jacobs_logo_.png",
      publishedAt: "2025-06-05T07:43:54",
      content:
        "By Domaine Rautenbach, Senior Brand Manager at Jacobs\r\nIn todays fast-paced world of pods and instant gratification, its easy to forget that truly great coffee starts at the source.\r\nThe origin of a … [+4186 chars]",
    },
    {
      source: {
        id: "talksport",
        name: "TalkSport",
      },
      author: "Mohamud Ahmed",
      title:
        "Angel Reese sends resolute five-word message after being savagely mocked by Kelsey Plum gesture",
      description:
        "It's been a rough couple of weeks for Angel Reese and the Chicago Sky.The Sky are still winless after their first three matches of the new WNBA season",
      url: "https://talksport.com/basketball/3236553/angel-reese-kelsey-plum-too-small-response-wnba-sky/",
      urlToImage:
        "https://talksport.com/wp-content/uploads/sites/5/2025/05/dmk20250525025CHIvsLAS-JS998301575.jpg?strip=all&quality=100&w=1920&h=1080&crop=1",
      publishedAt: "2025-05-26T11:19:01Z",
      content:
        "It's been a rough couple of weeks for Angel Reese and the Chicago Sky.\r\nThe Sky are still winless after their first three matches of the new WNBA season, and now Los Angeles Sparks star Kelsey Plum h… [+3111 chars]",
    },
    {
      source: {
        id: "cnn-es",
        name: "CNN Spanish",
      },
      author: "CNN",
      title:
        "Toma de posesión de Claudia Sheinbaum como presidenta de México: qué presidentes e invitados asisten, cuándo es y cómo ver en vivo",
      description:
        "Este martes 1 de octubre la presidenta electa de México, Claudia Sheinbaum, tendrá su toma de posesión. ¿Cómo será y quiénes estarán presentes? Aquí te contamos.",
      url: "https://cnnespanol.cnn.com/2024/09/30/claudia-sheinbaum-toma-protesta-mexico-presidenta-como-ver-orix/",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/cnne-1759212-diego-fonseca-la-presencia-de-lopez-obrador-es-una-condena-para-sheinbaum.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2024-09-30T17:00:42Z",
      content:
        "(CNN Español) Este martes 1 de octubre la presidenta electa de México, Claudia Sheinbaum, tendrá su toma de protesta, como se conoce en México a la investidura. ¿Cómo será y quiénes estarán presentes… [+1370 chars]",
    },
    {
      source: {
        id: "cnn-es",
        name: "CNN Spanish",
      },
      author: "David Close",
      title: "Muere a los 58 años Dikembe Mutombo, leyenda de la NBA",
      description:
        "Dikembe Mutombo, miembro del Salón de la Fama del Baloncesto conocido por sus bloqueos y su famoso movimiento de dedos después de impedir que los oponentes pudieran encestar, falleció el lunes a los 58 años a causa de un cáncer cerebral, según informó la NBA.",
      url: "https://cnnespanol.cnn.com/2024/09/30/muere-dikembe-mutombo-nba-trax/",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/cnne-1759940-gettyimages-1238650729.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2024-09-30T16:05:36Z",
      content:
        "(CNN)   Dikembe Mutombo, miembro del Salón de la Fama del Baloncesto conocido por sus bloqueos y su famoso movimiento de dedos después de impedir que los oponentes pudieran encestar, falleció el lune… [+2834 chars]",
    },
    {
      source: {
        id: "cnn-es",
        name: "CNN Spanish",
      },
      author: "Brenda Covarrubias",
      title:
        "Estos son todos los presidentes que ha tenido México en su historia",
      description:
        "Claudia Sheinbaum será la primera presidenta de México. Rumbo al día de la toma de posesión, te contamos quiénes son los hombres que han dirigido al país en los 200 años desde que México tuvo a su primer presidente.",
      url: "https://cnnespanol.cnn.com/2024/09/30/mexico-todos-los-presidentes-historia-elecciones-orix/",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/cnne-1692574-presidentes.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2024-09-30T14:28:49Z",
      content:
        "(CNN) Claudia Sheinbaum será la primera presidenta de México. Rumbo al día de la toma de posesión, te contamos quiénes son los hombres que han dirigido al país en los 200 años desde que México tuvo a… [+24453 chars]",
    },
  ];
  constructor() {
    super();
    console.log("Hello I am a Consructor");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  // Always use contructor with super() otherwise it will throw  error;
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
        return <div className="col-md-4"  key = {element.url}>
            {" "}
            <Newsitem
           
              title={element.title.slice(0,45)}
              description={element.description.slice(0,67)}
              imageurl={element.urlToImage}
              newsurl={element.url}
            />
          </div>
          })}
        </div>
      </div>
    );
  }
}

export default News;
