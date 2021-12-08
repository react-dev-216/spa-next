import style from '../styles/schedule.module.scss';
import ScheduleCard from './ScheduleCard';


interface staffMember {
  title: string;
  desc: string;
  desc2?: string;
}

const linda: staffMember = {
  title: 'Linda', 
  desc: 'Linda, from Malaysia, has years of experience giving many different types of massage.',
  desc2: 'Linda is from Malaysia.'
}

const layla: staffMember = {
  title: 'Layla', desc: 'Layla is from Latin America. Layla has expertise in several massage techniques.'
}

const nana: staffMember = {
  title: 'Nana',
  desc: 'Originally from China, Nana is petite but strong for her size. She specializes in Chinese massage.',
  desc2: 'Very pretty. Young and slim - petite. Chinese with straight, blonde, neck-length hair. Speaks English. Seems nice.'
}

const kelly: staffMember = {
  title: 'Kelly',
  desc: 'Kelly is from Korea, and is skilled in Swedish and Deep Tissue massage.',
  desc2: 'New Chinese lady.'
}

const ashley: staffMember = {
  title: 'Ashley',
  desc: 'Ashely is a serious-looking but fun-loving Malaysian lady who will make your session fun.',
  desc2: ' Busty Malaysian with wavy brown hair with blonde highlights. Large, all-natural breasts, with a well-proportioned, firm butt to match. Medium build. She has a serious look to her, but she\'s actually fun and likes to joke around (and knows when its appropriate to do so). She gives a good massage too.'
}

const angela: staffMember = {
  title: 'Angela',
  desc: 'Tall and originally from China, Angela doesn\'t speak much English but gives great massages.',
  desc2: 'Slim body, with long straight black hair. Very friendly.'
}

const karina: staffMember = {
  title: 'Karina', 
  desc: 'Karina is from Eastern Europe, and is very patient with her clients.',
  desc2: 'Karina is from Eastern Europe. Good size breasts, light-colored wavey hair, speaks English well.'  
}

const chanel: staffMember = {
  title: 'Chanel', 
  desc: 'A native of Spain, Chanel is pursing a degree in business while working part-time.',
  desc2: 'Spanish. Very pretty and has a fun personality. A pleasure to converse with. Large breasts and well-proportioned. Highly recommend.'
}

const jessica: staffMember = {
  title: 'Jessica', 
  desc: 'Jessica, from China, is slim very toned - she loves lifting weights in the gym, including doing bench press, squats, and dead-lifts',
  desc2: 'At 168 cm and weighing 53 kg, Jessica is Slim and tall Chinese woman with large breasts. She has straight black hair, is pretty, and very toned - she has very little body fat, as you will realise the moment you touch her. Jessica loves lifting weights in the gym - including bench press, squats, and dead-lifts. And yet she is still a fun loving girl who loves to laugh. Definitely worth a try. I\'m sure she could provide any level of firmness you would like.'
}

const bella: staffMember = {
  title: 'Bella', 
  desc: 'Bella is a tall Chinese lady specializing in Chinese massage.',
  desc2: '165 cm tall Chinese girl. Slim, pretty face, brown hair with highlights.'
}

const yoyo: staffMember = {
  title: 'Yoyo', 
  desc: 'Yoyo is always happy and can do all types of massage.',
  desc2: 'Yoyo is always happy.'
}

const giGi: staffMember = {
  title: 'GiGi', desc: 'GiGi is new.'
}

const cathy: staffMember = {
  title: 'Cathy', 
  desc: 'Half Philipino and half Chinese, Cathy has an advanced degree.',
  desc2: 'Half Filipino, half Chinese, nice body, good size breasts and nice butt. Speaks English well - she even has a graduate degree! Smart and great to converse with.',
}

const lora: staffMember = {
  title: 'Lora',
  desc: 'Lora is Chinese, and likes to do hot yoga.',
  desc2: 'Young-ish Chinese girl with medium build and medium height. Long, straight black hair. A bit quiet and shy, she has strong legs and likes to do hot yoga.'
}

const anne: staffMember = {
  title: 'Anne', 
  desc: 'Anne is a friendly Chinese lady.',
  desc2: 'Chinese. Medium build, long black hair, light skin, friendly.'
}

const tiffany: staffMember = {
  title: 'Tiffany', 
  desc: 'Tiffany is from Korea. She likes swimming and Marvel comics - especially Iron Man.',
  desc2: 'Korean girl. Medium build with a nice body. If she likes you she\'ll give you really good service. She likes swimming and Marvel comics - especially Iron Man.'
}

const tina: staffMember = {
  title: 'Tina', 
  desc: 'Tina is Vietnamese, and a sweet person.',
  desc2: 'Petite, sweet Vietnamese lady.'
}

const elisa: staffMember = {
  title: 'Elisa', desc: 'Elisa is new.'
}

const nancy: staffMember = {
  title: "Nancy",
  desc: "Nancy is Vietnamese and is in her early 20s. She speaks English.",
  desc2: "Nancy is Vietnamese and is in her early 20s." 
}

const selina: staffMember = {
  title: 'Selina', 
  desc: 'Selina is Vietnamese and has just finished her post-secondary education.',
  desc2: 'Selina is Vietnamese, in her early 20s, and speaks English well. A little larger than medium buid, a little shorter than medium height, long straight hair. She is a bit shy, but very nice. Her body is firm, and she has such amazing skin. She mostly works reception but does serve customers if she feels a connection.' 
}

const cindy: staffMember = {
  title: 'Cindy', 
  desc: 'Cindy, originally from China, is in her early 20s and is new.',
  desc2: 'Cindy is one hot item - it is worth the trip just to have a look at her.'

}

const suki: staffMember = {
  title: 'Suki', 
  desc: 'Suki is Chinese and is nice.',
  desc2: 'Smaller, nice boobs and butt. Works out at the gym regularly.'
}

const coco: staffMember = {
  title: 'Coco', 
  desc: 'Coco is Vietnamese and is new.',
  desc2: 'Coco is Vietnamese, slim, medium height, early 20s.'
}

interface TodaySchedule {
  today: string,
  gs: staffMember[],
  sr: staffMember[]
}

const todaySchedule: TodaySchedule = {
  today: "Monday 25 October 2021, 10a to 9p",
  gs: [tina, linda, coco],
  sr: [nana, kelly]
}

const gsNames = todaySchedule.gs.map((staffMember) => staffMember.title).join(", ");
const srNames = todaySchedule.sr.map((staffMember) => staffMember.title).join(", ");
const sb = `${todaySchedule.today} at goldensunshinespa.com: *Golden Sunshine*: ${gsNames}; *Soul Relax*: ${srNames}.`;

const gsNamesAndDescriptions = todaySchedule.gs.map((sM) => `- ${sM.title}: ${sM.desc2 || ''}`).join('\n');
const srNamesAndDescriptions = todaySchedule.sr.map((sM) => `- ${sM.title}: ${sM.desc2 || ''}`).join('\n');
const forum = `Schedule for ${todaySchedule.today} (goldensunshinespa.com):\n\n` +
  `*Golden Sunshine* 180 Winges Rd, near Hwy 7 & Weston Rd. Unit 5, Woodbridge, 905-265-2158\n` + gsNamesAndDescriptions +
  `\n\n*Soul Relax*. 7611 Pine Valley Dr, near Hwy 7, Unit 29. Woodbridge, 289-298-5662\n` + srNamesAndDescriptions;

console.log(sb)
console.log("\n");
console.log(forum)

const Schedule = () => { 
  const cardData = [
    {
      title: 'Today at Golden Sunshine',
      address: '180 Winges Rd, Unit 5, Woodbridge',
      subCards: todaySchedule.gs
    },
    {
      title: 'Today at Soul Relax',
      address: '7611 Pine Valley Dr, Unit 29, Woodbridge',
      subCards: todaySchedule.sr
    },
  ];

  return (
    <div className={style.wrapper}>
      <h1 id="schedule">Schedule</h1>
      <h3>{todaySchedule.today}</h3>
      <div className="container">
        <div className="row justify-content-center">
          {cardData &&
            cardData.map((x, i) => (
              <div key={i} className="col-md-4">
                <ScheduleCard title={x.title} subCards={x.subCards} address={x.address} key={x.title}/>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
