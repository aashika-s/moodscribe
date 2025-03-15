

// import React, { useEffect, useState } from 'react';
// import './MyMusic.css';
// import backgroundVideo from './video.mp4'; // Add your video file here

// const MyMusic = () => {
//     const [mood, setMood] = useState('');
//     const [songUrl, setSongUrl] = useState('');

//     useEffect(() => {
//         const selectedMood = localStorage.getItem('selectedMood');
//         setMood(selectedMood);

//         if (selectedMood) {
//             fetchSongUrl(selectedMood);
//         }
//     }, []);

//     const fetchSongUrl = (mood) => {
//         const songUrls = {
//             Anger: [
//                 'https://open.spotify.com/track/0ZZ0sbQhALzXTEzd6AbLMa?si=909ac2824bc745c4',
//                 'https://open.spotify.com/track/4OFFfqeoN8GmwxUi5zrquE?si=81aae7e712ad4705',
//                 'https://open.spotify.com/track/2Ec1iryNc1k6zkv1Nezz0F?si=e9f968ef6ce647ce',
//                 'https://open.spotify.com/track/5Y9sCzbsygH3EUA7YmwYql?si=3c655fabaf3d4183',
//                 'https://open.spotify.com/track/3BamLgSS5spS9pDMRUC4nW?si=1eb825e1e0624472',
//                 'https://open.spotify.com/track/2Fz1wFaIew3srIjazAZwUK?si=58437af826e04c4d',
//                 'https://open.spotify.com/track/2xDzPSYenRS2WubsuBE7Pc?si=ae1cab9c898b4fb4',
//                 'https://open.spotify.com/track/3uYaIlSK2FtiOkYB9goH2D?si=615a11a6772b4126',
//                 'https://open.spotify.com/track/0u9zPSQpdAiNBJjfAMLxoZ?si=e045a59572964b7f',
//                 'https://open.spotify.com/track/6J6Cqx61NLa6OjBh164vAv?si=af383ae7585d4388',
//                 'https://open.spotify.com/track/4G4jwX2cL85U1RSe0qvsxC?si=8f54ef86dabe4233'
//             ],
//             Sadness: [
//                 'https://open.spotify.com/track/0ZZ0sbQhALzXTEzd6AbLMa?si=909ac2824bc745c4',
//                 'https://open.spotify.com/track/4OFFfqeoN8GmwxUi5zrquE?si=81aae7e712ad4705',
//                 'https://open.spotify.com/track/2Ec1iryNc1k6zkv1Nezz0F?si=e9f968ef6ce647ce',
//                 'https://open.spotify.com/track/5Y9sCzbsygH3EUA7YmwYql?si=3c655fabaf3d4183',
//                 'https://open.spotify.com/track/3BamLgSS5spS9pDMRUC4nW?si=1eb825e1e0624472',
//                 'https://open.spotify.com/track/2Fz1wFaIew3srIjazAZwUK?si=58437af826e04c4d',
//                 'https://open.spotify.com/track/2xDzPSYenRS2WubsuBE7Pc?si=ae1cab9c898b4fb4',
//                 'https://open.spotify.com/track/3uYaIlSK2FtiOkYB9goH2D?si=615a11a6772b4126',
//                 'https://open.spotify.com/track/0u9zPSQpdAiNBJjfAMLxoZ?si=e045a59572964b7f',
//                 'https://open.spotify.com/track/6J6Cqx61NLa6OjBh164vAv?si=af383ae7585d4388',
//                 'https://open.spotify.com/track/4G4jwX2cL85U1RSe0qvsxC?si=8f54ef86dabe4233'
               
//             ],
//             Happiness: [
//                 'https://open.spotify.com/track/0ZZ0sbQhALzXTEzd6AbLMa?si=909ac2824bc745c4',
//                 'https://open.spotify.com/track/4OFFfqeoN8GmwxUi5zrquE?si=81aae7e712ad4705',
//                 'https://open.spotify.com/track/2Ec1iryNc1k6zkv1Nezz0F?si=e9f968ef6ce647ce',
//                 'https://open.spotify.com/track/5Y9sCzbsygH3EUA7YmwYql?si=3c655fabaf3d4183',
//                 'https://open.spotify.com/track/3BamLgSS5spS9pDMRUC4nW?si=1eb825e1e0624472',
//                 'https://open.spotify.com/track/2Fz1wFaIew3srIjazAZwUK?si=58437af826e04c4d',
//                 'https://open.spotify.com/track/2xDzPSYenRS2WubsuBE7Pc?si=ae1cab9c898b4fb4',
//                 'https://open.spotify.com/track/3uYaIlSK2FtiOkYB9goH2D?si=615a11a6772b4126',
//                 'https://open.spotify.com/track/0u9zPSQpdAiNBJjfAMLxoZ?si=e045a59572964b7f',
//                 'https://open.spotify.com/track/6J6Cqx61NLa6OjBh164vAv?si=af383ae7585d4388',
//                 'https://open.spotify.com/track/4G4jwX2cL85U1RSe0qvsxC?si=8f54ef86dabe4233'
               
//             ],

//             Tensed: [
//                 'https://open.spotify.com/track/0ZZ0sbQhALzXTEzd6AbLMa?si=909ac2824bc745c4',
//                 'https://open.spotify.com/track/4OFFfqeoN8GmwxUi5zrquE?si=81aae7e712ad4705',
//                 'https://open.spotify.com/track/2Ec1iryNc1k6zkv1Nezz0F?si=e9f968ef6ce647ce',
//                 'https://open.spotify.com/track/5Y9sCzbsygH3EUA7YmwYql?si=3c655fabaf3d4183',
//                 'https://open.spotify.com/track/3BamLgSS5spS9pDMRUC4nW?si=1eb825e1e0624472',
//                 'https://open.spotify.com/track/2Fz1wFaIew3srIjazAZwUK?si=58437af826e04c4d',
//                 'https://open.spotify.com/track/2xDzPSYenRS2WubsuBE7Pc?si=ae1cab9c898b4fb4',
//                 'https://open.spotify.com/track/3uYaIlSK2FtiOkYB9goH2D?si=615a11a6772b4126',
//                 'https://open.spotify.com/track/0u9zPSQpdAiNBJjfAMLxoZ?si=e045a59572964b7f',
//                 'https://open.spotify.com/track/6J6Cqx61NLa6OjBh164vAv?si=af383ae7585d4388',
//                 'https://open.spotify.com/track/4G4jwX2cL85U1RSe0qvsxC?si=8f54ef86dabe4233'

//             ],

//             Jealous: [
//                 'https://open.spotify.com/track/0ZZ0sbQhALzXTEzd6AbLMa?si=909ac2824bc745c4',
//                 'https://open.spotify.com/track/4OFFfqeoN8GmwxUi5zrquE?si=81aae7e712ad4705',
//                 'https://open.spotify.com/track/2Ec1iryNc1k6zkv1Nezz0F?si=e9f968ef6ce647ce',
//                 'https://open.spotify.com/track/5Y9sCzbsygH3EUA7YmwYql?si=3c655fabaf3d4183',
//                 'https://open.spotify.com/track/3BamLgSS5spS9pDMRUC4nW?si=1eb825e1e0624472',
//                 'https://open.spotify.com/track/2Fz1wFaIew3srIjazAZwUK?si=58437af826e04c4d',
//                 'https://open.spotify.com/track/2xDzPSYenRS2WubsuBE7Pc?si=ae1cab9c898b4fb4',
//                 'https://open.spotify.com/track/3uYaIlSK2FtiOkYB9goH2D?si=615a11a6772b4126',
//                 'https://open.spotify.com/track/0u9zPSQpdAiNBJjfAMLxoZ?si=e045a59572964b7f',
//                 'https://open.spotify.com/track/6J6Cqx61NLa6OjBh164vAv?si=af383ae7585d4388',
//                 'https://open.spotify.com/track/4G4jwX2cL85U1RSe0qvsxC?si=8f54ef86dabe4233'

//             ],
//             Love: [
//                 'https://open.spotify.com/track/0ZZ0sbQhALzXTEzd6AbLMa?si=909ac2824bc745c4',
//                 'https://open.spotify.com/track/4OFFfqeoN8GmwxUi5zrquE?si=81aae7e712ad4705',
//                 'https://open.spotify.com/track/2Ec1iryNc1k6zkv1Nezz0F?si=e9f968ef6ce647ce',
//                 'https://open.spotify.com/track/5Y9sCzbsygH3EUA7YmwYql?si=3c655fabaf3d4183',
//                 'https://open.spotify.com/track/3BamLgSS5spS9pDMRUC4nW?si=1eb825e1e0624472',
//                 'https://open.spotify.com/track/2Fz1wFaIew3srIjazAZwUK?si=58437af826e04c4d',
//                 'https://open.spotify.com/track/2xDzPSYenRS2WubsuBE7Pc?si=ae1cab9c898b4fb4',
//                 'https://open.spotify.com/track/3uYaIlSK2FtiOkYB9goH2D?si=615a11a6772b4126',
//                 'https://open.spotify.com/track/0u9zPSQpdAiNBJjfAMLxoZ?si=e045a59572964b7f',
//                 'https://open.spotify.com/track/6J6Cqx61NLa6OjBh164vAv?si=af383ae7585d4388',
//                 'https://open.spotify.com/track/4G4jwX2cL85U1RSe0qvsxC?si=8f54ef86dabe4233'

//             ],
//             Sleepy: [
//                 'https://open.spotify.com/track/0ZZ0sbQhALzXTEzd6AbLMa?si=909ac2824bc745c4',
//                 'https://open.spotify.com/track/4OFFfqeoN8GmwxUi5zrquE?si=81aae7e712ad4705',
//                 'https://open.spotify.com/track/2Ec1iryNc1k6zkv1Nezz0F?si=e9f968ef6ce647ce',
//                 'https://open.spotify.com/track/5Y9sCzbsygH3EUA7YmwYql?si=3c655fabaf3d4183',
//                 'https://open.spotify.com/track/3BamLgSS5spS9pDMRUC4nW?si=1eb825e1e0624472',
//                 'https://open.spotify.com/track/2Fz1wFaIew3srIjazAZwUK?si=58437af826e04c4d',
//                 'https://open.spotify.com/track/2xDzPSYenRS2WubsuBE7Pc?si=ae1cab9c898b4fb4',
//                 'https://open.spotify.com/track/3uYaIlSK2FtiOkYB9goH2D?si=615a11a6772b4126',
//                 'https://open.spotify.com/track/0u9zPSQpdAiNBJjfAMLxoZ?si=e045a59572964b7f',
//                 'https://open.spotify.com/track/6J6Cqx61NLa6OjBh164vAv?si=af383ae7585d4388',
//                 'https://open.spotify.com/track/4G4jwX2cL85U1RSe0qvsxC?si=8f54ef86dabe4233'

//             ],
//             Bored: [
//                 'https://open.spotify.com/track/0ZZ0sbQhALzXTEzd6AbLMa?si=909ac2824bc745c4',
//                 'https://open.spotify.com/track/4OFFfqeoN8GmwxUi5zrquE?si=81aae7e712ad4705',
//                 'https://open.spotify.com/track/2Ec1iryNc1k6zkv1Nezz0F?si=e9f968ef6ce647ce',
//                 'https://open.spotify.com/track/5Y9sCzbsygH3EUA7YmwYql?si=3c655fabaf3d4183',
//                 'https://open.spotify.com/track/3BamLgSS5spS9pDMRUC4nW?si=1eb825e1e0624472',
//                 'https://open.spotify.com/track/2Fz1wFaIew3srIjazAZwUK?si=58437af826e04c4d',
//                 'https://open.spotify.com/track/2xDzPSYenRS2WubsuBE7Pc?si=ae1cab9c898b4fb4',
//                 'https://open.spotify.com/track/3uYaIlSK2FtiOkYB9goH2D?si=615a11a6772b4126',
//                 'https://open.spotify.com/track/0u9zPSQpdAiNBJjfAMLxoZ?si=e045a59572964b7f',
//                 'https://open.spotify.com/track/6J6Cqx61NLa6OjBh164vAv?si=af383ae7585d4388',
//                 'https://open.spotify.com/track/4G4jwX2cL85U1RSe0qvsxC?si=8f54ef86dabe4233'
//             ],
//             Embarrassed: [
//                 'https://open.spotify.com/track/0ZZ0sbQhALzXTEzd6AbLMa?si=909ac2824bc745c4',
//                 'https://open.spotify.com/track/4OFFfqeoN8GmwxUi5zrquE?si=81aae7e712ad4705',
//                 'https://open.spotify.com/track/2Ec1iryNc1k6zkv1Nezz0F?si=e9f968ef6ce647ce',
//                 'https://open.spotify.com/track/5Y9sCzbsygH3EUA7YmwYql?si=3c655fabaf3d4183',
//                 'https://open.spotify.com/track/3BamLgSS5spS9pDMRUC4nW?si=1eb825e1e0624472',
//                 'https://open.spotify.com/track/2Fz1wFaIew3srIjazAZwUK?si=58437af826e04c4d',
//                 'https://open.spotify.com/track/2xDzPSYenRS2WubsuBE7Pc?si=ae1cab9c898b4fb4',
//                 'https://open.spotify.com/track/3uYaIlSK2FtiOkYB9goH2D?si=615a11a6772b4126',
//                 'https://open.spotify.com/track/0u9zPSQpdAiNBJjfAMLxoZ?si=e045a59572964b7f',
//                 'https://open.spotify.com/track/6J6Cqx61NLa6OjBh164vAv?si=af383ae7585d4388',
//                 'https://open.spotify.com/track/4G4jwX2cL85U1RSe0qvsxC?si=8f54ef86dabe4233'

//             ],
//             Proud: [
//                 'https://open.spotify.com/track/0ZZ0sbQhALzXTEzd6AbLMa?si=909ac2824bc745c4',
//                 'https://open.spotify.com/track/4OFFfqeoN8GmwxUi5zrquE?si=81aae7e712ad4705',
//                 'https://open.spotify.com/track/2Ec1iryNc1k6zkv1Nezz0F?si=e9f968ef6ce647ce',
//                 'https://open.spotify.com/track/5Y9sCzbsygH3EUA7YmwYql?si=3c655fabaf3d4183',
//                 'https://open.spotify.com/track/3BamLgSS5spS9pDMRUC4nW?si=1eb825e1e0624472',
//                 'https://open.spotify.com/track/2Fz1wFaIew3srIjazAZwUK?si=58437af826e04c4d',
//                 'https://open.spotify.com/track/2xDzPSYenRS2WubsuBE7Pc?si=ae1cab9c898b4fb4',
//                 'https://open.spotify.com/track/3uYaIlSK2FtiOkYB9goH2D?si=615a11a6772b4126',
//                 'https://open.spotify.com/track/0u9zPSQpdAiNBJjfAMLxoZ?si=e045a59572964b7f',
//                 'https://open.spotify.com/track/6J6Cqx61NLa6OjBh164vAv?si=af383ae7585d4388',
//                 'https://open.spotify.com/track/4G4jwX2cL85U1RSe0qvsxC?si=8f54ef86dabe4233'

//             ],
//             Excited: [
//                 'https://open.spotify.com/track/0ZZ0sbQhALzXTEzd6AbLMa?si=909ac2824bc745c4',
//                 'https://open.spotify.com/track/4OFFfqeoN8GmwxUi5zrquE?si=81aae7e712ad4705',
//                 'https://open.spotify.com/track/2Ec1iryNc1k6zkv1Nezz0F?si=e9f968ef6ce647ce',
//                 'https://open.spotify.com/track/5Y9sCzbsygH3EUA7YmwYql?si=3c655fabaf3d4183',
//                 'https://open.spotify.com/track/3BamLgSS5spS9pDMRUC4nW?si=1eb825e1e0624472',
//                 'https://open.spotify.com/track/2Fz1wFaIew3srIjazAZwUK?si=58437af826e04c4d',
//                 'https://open.spotify.com/track/2xDzPSYenRS2WubsuBE7Pc?si=ae1cab9c898b4fb4',
//                 'https://open.spotify.com/track/3uYaIlSK2FtiOkYB9goH2D?si=615a11a6772b4126',
//                 'https://open.spotify.com/track/0u9zPSQpdAiNBJjfAMLxoZ?si=e045a59572964b7f',
//                 'https://open.spotify.com/track/6J6Cqx61NLa6OjBh164vAv?si=af383ae7585d4388',
//                 'https://open.spotify.com/track/4G4jwX2cL85U1RSe0qvsxC?si=8f54ef86dabe4233'

//             ]
//         };


//         const songs = songUrls[mood] || [];
//         if (songs.length) {
//             setSongUrl(songs[Math.floor(Math.random() * songs.length)]);
//         }
//     };

//     return (
//         <div className="music-container">
//             <video className="background-video" autoPlay loop muted>
//                 <source src={backgroundVideo} type="video/mp4" />
//             </video>
//             <div className="content">
//                 <h1>Current Mood: {mood}</h1>
//                 <a href={songUrl} target="_blank" rel="noopener noreferrer">
//                     Listen to a song
//                 </a>
//             </div>
//         </div>
//     );
// };

// export default MyMusic;




























// import React, { useEffect, useState } from 'react';
// import './MyMusic.css';
// import backgroundVideo from './video.mp4'; // Ensure you have this file in the right location

// const MyMusic = () => {
//     const [mood, setMood] = useState('');
//     const [songUrl, setSongUrl] = useState('');

//     useEffect(() => {
//         const selectedMood = localStorage.getItem('selectedMood');
//         setMood(selectedMood);

//         if (selectedMood) {
//             fetchSongUrl(selectedMood);
//         }
//     }, []);

//     const fetchSongUrl = (mood) => {
//         const songUrls = {
//             Anger: [ 
//                 'https://open.spotify.com/track/0ZZ0sbQhALzXTEzd6AbLMa?si=909ac2824bc745c4',
//                 'https://open.spotify.com/track/4OFFfqeoN8GmwxUi5zrquE?si=81aae7e712ad4705',
//                 'https://open.spotify.com/track/2Ec1iryNc1k6zkv1Nezz0F?si=e9f968ef6ce647ce',
//                 'https://open.spotify.com/track/5Y9sCzbsygH3EUA7YmwYql?si=3c655fabaf3d4183',
//                 'https://open.spotify.com/track/3BamLgSS5spS9pDMRUC4nW?si=1eb825e1e0624472',
//                 'https://open.spotify.com/track/2Fz1wFaIew3srIjazAZwUK?si=58437af826e04c4d',
//                 'https://open.spotify.com/track/2xDzPSYenRS2WubsuBE7Pc?si=ae1cab9c898b4fb4',
//                 'https://open.spotify.com/track/3uYaIlSK2FtiOkYB9goH2D?si=615a11a6772b4126',
//                 'https://open.spotify.com/track/0u9zPSQpdAiNBJjfAMLxoZ?si=e045a59572964b7f',
//                 'https://open.spotify.com/track/6J6Cqx61NLa6OjBh164vAv?si=af383ae7585d4388',
//                 'https://open.spotify.com/track/4G4jwX2cL85U1RSe0qvsxC?si=8f54ef86dabe4233'
//             ],
//             Sad: [ 
//                 'https://open.spotify.com/track/1ldyyMM61fKaSUiWnZNp03?si=edc20e17c90e4e76',
//                 'https://open.spotify.com/track/2pJmmSzJzgyBwUhyqqNntp?si=99568f8066274430',
//                 'https://open.spotify.com/track/501Cc7uHAE8rUkE1ey5P5k?si=82b0eecb12de4406',
//                 'https://open.spotify.com/track/1JeftR8QWUfMGCM0VLp1Jz?si=d85e1aa2144d4b5c',
//                 'https://open.spotify.com/track/0HFPMPIPGy0o9ocbHMNz2P?si=2925c44ee6f2414d',
//                 'https://open.spotify.com/track/0HFPMPIPGy0o9ocbHMNz2P?si=2925c44ee6f2414d',
//                 'https://open.spotify.com/track/6xGruZOHLs39ZbVccQTuPZ?si=0714c8c3f0e64e84',
//                 'https://open.spotify.com/track/3AJwUDP919kvQ9QcozQPxg?si=8e3176b6de5e425a',
//                 'https://open.spotify.com/track/7LVHVU3tWfcxj5aiPFEW4Q?si=1d274774e6b54ab8',
//                 'https://open.spotify.com/track/2e4oIsOkGJNQ4Ab9sjOm52?si=2d816b94140d4fc1'
//             ],

//             Happy: [
//                 'https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH?si=bdcdcac507eb4edf',
//                 'https://open.spotify.com/track/04F42oEuKrRComYJfJuyVR?si=30654b68cb304801',
//                 'https://open.spotify.com/track/4y5bvROuBDPr5fuwXbIBZR?si=87973a2f8c8a4af2',
//                 'https://open.spotify.com/track/2HRqTpkrJO5ggZyyK6NPWz?si=d0dcc4bce5454d07',
//                 'https://open.spotify.com/track/4cluDES4hQEUhmXj6TXkSo?si=7fdbcb18b1ec4410',
//                 'https://open.spotify.com/track/0rzaRSujxA0bKyjJl6vHYq?si=4c6ed59f6ff54b98',
//                 'https://open.spotify.com/track/6FfLg6FFqhCsrFOaHIGkg0?si=11a63ffe85154033',
//                 'https://open.spotify.com/track/3VCXx37jNGNOMns6z2OnvJ?si=455c70ad86cd4a55',
//                 'https://open.spotify.com/track/39GcR1iJpR2RX629O0zuW5?si=c9f7a85c1dfa4b0e',
//                 'https://open.spotify.com/track/2Lumsra3kuU61wXkEKzKaK?si=45185cd88c1a4292',
//                 'https://open.spotify.com/track/7rC3P7tpWriaC4hYWKwGQd?si=a09ab076e5534c34',
//                 'https://open.spotify.com/track/2plbrEY59IikOBgBGLjaoe?si=568d92b9d9a14fda'
               
//             ],

//             Tensed: [ 
//                 'https://open.spotify.com/track/5NflwXmtFcWnMMorwdsawy?si=457259833f254f21',
//                 'https://open.spotify.com/track/6NXaCvBai7L0xlcWXElHY2?si=f1dab596134f4388',
//                 'https://open.spotify.com/track/6WwSZisf4dC6xqUKrRcpHl?si=a04507d529314709',
//                 'https://open.spotify.com/track/4BpcPtOKnRtX9opae8deLi?si=bba7516cffae45ce',
//                 'https://open.spotify.com/track/09SelFwWSbRRf8AiMsZm41?si=2ff28fb37a1940f0',
//                 'https://open.spotify.com/track/20nhoFPhyUGokEAbtSEHJi?si=63ce4af37efa4b80',
//                 'https://open.spotify.com/track/5SLIvHsHJTrYTjRoby6Z3T?si=d3251c256f8c4c69',
//                 'https://open.spotify.com/track/7m9U8gRy5ahKWHtdT037Qr?si=eb5e555f84a14f2d',
//                 'https://open.spotify.com/track/577ymzx9s8rMFmDvFYjqCp?si=75c6b747faaa44d8',
//                 'https://open.spotify.com/track/1x5nSYVPDfkI6DVnDHMKy8?si=e939be551d8348e1 '

//             ],

//             Sick: [ 
//                 'https://open.spotify.com/track/7JgZbix8xDasAhbn3N7eIF?si=45a39653dae84ed3',
//                 'https://open.spotify.com/track/5qC17VMNoZdF2gAw28FtsV?si=75dfe277422e4146',
//                 'https://open.spotify.com/track/19JzJOMs4wkuKxY8WEOMea?si=b737d3ae9a034acb',
//                 'https://open.spotify.com/track/0oX75M5oIgft6yF9F8ror7?si=1f5fafdddac44e39',
//                 'https://open.spotify.com/track/4pAjQMx0HQFUDHv9J9mtQw?si=e594598927b04abf',
//                 'https://open.spotify.com/track/1B3np9BUQQUjo0e4j0QM2J?si=a91d70e9226b4baf',
//                 'https://open.spotify.com/track/0ytvsZOerGzUWfHXVT2Sgy?si=0caabeeaba2142cc',
//                 'https://open.spotify.com/track/5qC17VMNoZdF2gAw28FtsV?si=f26fc303852b4e63',
//                 'https://open.spotify.com/track/2RycgtfFQZOPgEGrzBGE0j?si=fd5dacc62b3c42b2 '

//             ],
//             Love: [ 
//                 'https://open.spotify.com/track/4usmeZGpIjHaEDhPcD29dg?si=ea5ccf46a31d4d16',
//                 'https://open.spotify.com/track/4lqWAXNZdxWXfDg0X66Cgz?si=7d7e5d8d5cf1420f',
//                 'https://open.spotify.com/track/5U9LP1keJnKYFfWQnwEJ2f?si=93fe9104d2114a34',
//                 'https://open.spotify.com/track/3CYqHs1OZcb7UnWQX11ta7?si=b03e2103b9d34ce3',
//                 'https://open.spotify.com/track/5u720Ok6Eu5chQksGz6E1r?si=3cf2a35047f24885',
//                 'https://open.spotify.com/track/5rDXfGMWI6S8wkXR0MHsvv?si=49af2a7ec34b4f49',
//                 'https://open.spotify.com/track/2P6qhc0PFVsu9xtoNfsBuo?si=281069eb18c44e85',
//                 'https://open.spotify.com/track/1aEsTgCsv8nOjEgyEoRCpS?si=809e98b062cb4e72',
//                 'https://open.spotify.com/track/1is8gU4RVcN4J8xItxWoOY?si=faa96fca875d4cd9',
//                 'https://open.spotify.com/track/16XiTUC2rQvb5lmtOm3FYY?si=ec48bbc7ce264085 '
                
//             ],
//             Sleepy: [
//                 'https://open.spotify.com/track/5lPvUiyvXEHMsiuOybY1Dc?si=8e9c0553d021493b',
//                 'https://open.spotify.com/track/3B76b41yF88QMw2pEuHSbu?si=0deb9e3a20c34e61',
//                 'https://open.spotify.com/track/2kf37pB9SKZvEBGfCKDMvF?si=ee8aaba3690f48b7',
//                 'https://open.spotify.com/track/32tcOarl902xsb3Rii178h?si=3d3a0a92f5244c6a',
//                 'https://open.spotify.com/track/4WbTS3tKGfxNxNAU6rjq8a?si=72a9357d06334bb4',
//                 'https://open.spotify.com/track/3VBADJVrLwGoM0Xbq9z37S?si=d6e16b3304d547ba',
//                 'https://open.spotify.com/track/40frhLpVMThTogyowcdNtb?si=2ab39bd438cb40a1',
//                 'https://open.spotify.com/track/3ImDPdVam36fsjK1knH8sb?si=ccef236dbcc54f55',
//                 'https://open.spotify.com/track/6lKuDS6wWeWfqtjzWAbsIh?si=58f48959455d4f43',
//                 'https://open.spotify.com/track/0I5cNbge7UENEL9AQZBjKa?si=8779e297915a4ff9 '

//             ],
//             Bored: [  
//                 'https://open.spotify.com/track/1gH1h30wkQdd9zhY3j7a8T?si=f97a92770f40482d',
//                 'https://open.spotify.com/track/2Zo1PcszsT9WQ0ANntJbID?si=9d3c4de1eb78488c',
//                 'https://open.spotify.com/track/3qoftcUZaUOncvIYjFSPdE?si=f87284160e1f4518',
//                 'https://open.spotify.com/track/2hloaUoRonYssMuqLCBLTX?si=3750ac1d26464ffd',
//                 'https://open.spotify.com/track/39LLxExYz6ewLAcYrzQQyP?si=69265a4d06544a8d',
//                 'https://open.spotify.com/track/2Lumsra3kuU61wXkEKzKaK?si=e67ccf3b312a4b67',
//                 'https://open.spotify.com/track/3l9wuxFDzUCKSYdP0M4Iai?si=9a212d3bd5be430f',
//                 'https://open.spotify.com/track/0O45fw2L5vsWpdsOdXwNAR?si=2ed047ec591b4f0f',
//                 'https://open.spotify.com/track/2FDTHlrBguDzQkp7PVj16Q?si=e3cb3a1bcff64878',
//                 'https://open.spotify.com/track/5KkCsYIgMK5H7Ih31Dnd2Q?si=a4482b29ce27410f'
//             ],
//             Tired: [
//                'https://open.spotify.com/track/5E30LdtzQTGqRvNd7l6kG5?si=24a3c906cf4a432a',
//                'https://open.spotify.com/track/1ZgMsA55GIY7ICkQh5MILA?si=205bb5ff3b3c4d70',
//                'https://open.spotify.com/track/0yc6Gst2xkRu0eMLeRMGCX?si=88391991369f4030',
//                'https://open.spotify.com/track/7DcJ6fEBb7BaKuYKTwiDxK?si=8b424d9b5d6e4579',
//                'https://open.spotify.com/track/37y7iDayfwm3WXn5BiAoRk?si=55ead97665c04201',
//                'https://open.spotify.com/track/58ge6dfP91o9oXMzq3XkIS?si=700f2157520443ab',
//                'https://open.spotify.com/track/58ge6dfP91o9oXMzq3XkIS?si=077f724f4b3f4c6c',
//                'https://open.spotify.com/track/45ROR8UMn60YEVQnDy0uVF?si=2307a35069e2424a',
//                'https://open.spotify.com/track/1xK59OXxi2TAAAbmZK0kBL?si=1e9a82bd140c4f10',
//                'https://open.spotify.com/track/1Fid2jjqsHViMX6xNH70hE?si=32a65700f9534ab7',
//                'https://open.spotify.com/track/56TOfxnRzSRbFRw8J6C4IT?si=67a86912ae344e86',
//                'https://open.spotify.com/track/1NZs6n6hl8UuMaX0UC0YTz?si=dc327a129a924b73'

//             ],
           
//             Excited: [
//                 'https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH?si=bdcdcac507eb4edf',
//                 'https://open.spotify.com/track/04F42oEuKrRComYJfJuyVR?si=30654b68cb304801',
//                 'https://open.spotify.com/track/4y5bvROuBDPr5fuwXbIBZR?si=87973a2f8c8a4af2',
//                 'https://open.spotify.com/track/2HRqTpkrJO5ggZyyK6NPWz?si=d0dcc4bce5454d07',
//                 'https://open.spotify.com/track/4cluDES4hQEUhmXj6TXkSo?si=7fdbcb18b1ec4410',
//                 'https://open.spotify.com/track/0rzaRSujxA0bKyjJl6vHYq?si=4c6ed59f6ff54b98',
//                 'https://open.spotify.com/track/6FfLg6FFqhCsrFOaHIGkg0?si=11a63ffe85154033',
//                 'https://open.spotify.com/track/3VCXx37jNGNOMns6z2OnvJ?si=455c70ad86cd4a55',
//                 'https://open.spotify.com/track/39GcR1iJpR2RX629O0zuW5?si=c9f7a85c1dfa4b0e',
//                 'https://open.spotify.com/track/2Lumsra3kuU61wXkEKzKaK?si=45185cd88c1a4292',
//                 'https://open.spotify.com/track/7rC3P7tpWriaC4hYWKwGQd?si=a09ab076e5534c34',
//                 'https://open.spotify.com/track/2plbrEY59IikOBgBGLjaoe?si=568d92b9d9a14fda'
//             ]
           
//         };

//         const moodSongs = songUrls[mood] || [];
//         if (moodSongs.length > 0) {
//             const randomSong = moodSongs[Math.floor(Math.random() * moodSongs.length)];
//             setSongUrl(randomSong);
//         } else {
//             setSongUrl('');
//         }
//     };

//     return (
//         <div className="my-music">
//             <video autoPlay loop muted className="background-video">
//                 <source src={backgroundVideo} type="video/mp4" />
//             </video>
//             <div className="content">
//                 <h1>{mood ? `Songs for ${mood}` : "Select a Mood"}</h1>
//                 {songUrl ? (
//                     <a href={songUrl} target="_blank" rel="noopener noreferrer">
//                         Play Song
//                     </a>
//                 ) : (
//                     <p>No song available for this mood.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default MyMusic;


































/*
import React, { useEffect, useState } from 'react';
import './MyMusic.css';
import backgroundVideo from './video.mp4'; // Ensure you have this file in the right location

const MyMusic = () => {
    const [mood, setMood] = useState('');
    const [songUrl, setSongUrl] = useState('');

    useEffect(() => {
        const selectedMood = localStorage.getItem('selectedMood');
        setMood(selectedMood);

        if (selectedMood) {
            fetchSongUrl(selectedMood);
        }
    }, []);

    const fetchSongUrl = (mood) => {
        const songUrls = {


            Anger: [ 
                                'https://open.spotify.com/track/0ZZ0sbQhALzXTEzd6AbLMa?si=909ac2824bc745c4',
                                'https://open.spotify.com/track/4OFFfqeoN8GmwxUi5zrquE?si=81aae7e712ad4705',
                                'https://open.spotify.com/track/2Ec1iryNc1k6zkv1Nezz0F?si=e9f968ef6ce647ce',
                                'https://open.spotify.com/track/5Y9sCzbsygH3EUA7YmwYql?si=3c655fabaf3d4183',
                                'https://open.spotify.com/track/3BamLgSS5spS9pDMRUC4nW?si=1eb825e1e0624472',
                                'https://open.spotify.com/track/2Fz1wFaIew3srIjazAZwUK?si=58437af826e04c4d',
                                'https://open.spotify.com/track/2xDzPSYenRS2WubsuBE7Pc?si=ae1cab9c898b4fb4',
                                'https://open.spotify.com/track/3uYaIlSK2FtiOkYB9goH2D?si=615a11a6772b4126',
                                'https://open.spotify.com/track/0u9zPSQpdAiNBJjfAMLxoZ?si=e045a59572964b7f',
                                'https://open.spotify.com/track/6J6Cqx61NLa6OjBh164vAv?si=af383ae7585d4388',
                                'https://open.spotify.com/track/4G4jwX2cL85U1RSe0qvsxC?si=8f54ef86dabe4233'
                            ],
                            Sad: [ 
                                'https://open.spotify.com/track/1ldyyMM61fKaSUiWnZNp03?si=edc20e17c90e4e76',
                                'https://open.spotify.com/track/2pJmmSzJzgyBwUhyqqNntp?si=99568f8066274430',
                                'https://open.spotify.com/track/501Cc7uHAE8rUkE1ey5P5k?si=82b0eecb12de4406',
                                'https://open.spotify.com/track/1JeftR8QWUfMGCM0VLp1Jz?si=d85e1aa2144d4b5c',
                                'https://open.spotify.com/track/0HFPMPIPGy0o9ocbHMNz2P?si=2925c44ee6f2414d',
                                'https://open.spotify.com/track/0HFPMPIPGy0o9ocbHMNz2P?si=2925c44ee6f2414d',
                                'https://open.spotify.com/track/6xGruZOHLs39ZbVccQTuPZ?si=0714c8c3f0e64e84',
                                'https://open.spotify.com/track/3AJwUDP919kvQ9QcozQPxg?si=8e3176b6de5e425a',
                                'https://open.spotify.com/track/7LVHVU3tWfcxj5aiPFEW4Q?si=1d274774e6b54ab8',
                                'https://open.spotify.com/track/2e4oIsOkGJNQ4Ab9sjOm52?si=2d816b94140d4fc1'
                            ],
                
                            Happy: [
                                'https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH?si=bdcdcac507eb4edf',
                                'https://open.spotify.com/track/04F42oEuKrRComYJfJuyVR?si=30654b68cb304801',
                                'https://open.spotify.com/track/4y5bvROuBDPr5fuwXbIBZR?si=87973a2f8c8a4af2',
                                'https://open.spotify.com/track/2HRqTpkrJO5ggZyyK6NPWz?si=d0dcc4bce5454d07',
                                'https://open.spotify.com/track/4cluDES4hQEUhmXj6TXkSo?si=7fdbcb18b1ec4410',
                                'https://open.spotify.com/track/0rzaRSujxA0bKyjJl6vHYq?si=4c6ed59f6ff54b98',
                                'https://open.spotify.com/track/6FfLg6FFqhCsrFOaHIGkg0?si=11a63ffe85154033',
                                'https://open.spotify.com/track/3VCXx37jNGNOMns6z2OnvJ?si=455c70ad86cd4a55',
                                'https://open.spotify.com/track/39GcR1iJpR2RX629O0zuW5?si=c9f7a85c1dfa4b0e',
                                'https://open.spotify.com/track/2Lumsra3kuU61wXkEKzKaK?si=45185cd88c1a4292',
                                'https://open.spotify.com/track/7rC3P7tpWriaC4hYWKwGQd?si=a09ab076e5534c34',
                                'https://open.spotify.com/track/2plbrEY59IikOBgBGLjaoe?si=568d92b9d9a14fda'
                               
                            ],
                
                            Tensed: [ 
                                'https://open.spotify.com/track/5NflwXmtFcWnMMorwdsawy?si=457259833f254f21',
                                'https://open.spotify.com/track/6NXaCvBai7L0xlcWXElHY2?si=f1dab596134f4388',
                                'https://open.spotify.com/track/6WwSZisf4dC6xqUKrRcpHl?si=a04507d529314709',
                                'https://open.spotify.com/track/4BpcPtOKnRtX9opae8deLi?si=bba7516cffae45ce',
                                'https://open.spotify.com/track/09SelFwWSbRRf8AiMsZm41?si=2ff28fb37a1940f0',
                                'https://open.spotify.com/track/20nhoFPhyUGokEAbtSEHJi?si=63ce4af37efa4b80',
                                'https://open.spotify.com/track/5SLIvHsHJTrYTjRoby6Z3T?si=d3251c256f8c4c69',
                                'https://open.spotify.com/track/7m9U8gRy5ahKWHtdT037Qr?si=eb5e555f84a14f2d',
                                'https://open.spotify.com/track/577ymzx9s8rMFmDvFYjqCp?si=75c6b747faaa44d8',
                                'https://open.spotify.com/track/1x5nSYVPDfkI6DVnDHMKy8?si=e939be551d8348e1 '
                
                            ],
                
                            Sick: [ 
                                'https://open.spotify.com/track/7JgZbix8xDasAhbn3N7eIF?si=45a39653dae84ed3',
                                'https://open.spotify.com/track/5qC17VMNoZdF2gAw28FtsV?si=75dfe277422e4146',
                                'https://open.spotify.com/track/19JzJOMs4wkuKxY8WEOMea?si=b737d3ae9a034acb',
                                'https://open.spotify.com/track/0oX75M5oIgft6yF9F8ror7?si=1f5fafdddac44e39',
                                'https://open.spotify.com/track/4pAjQMx0HQFUDHv9J9mtQw?si=e594598927b04abf',
                                'https://open.spotify.com/track/1B3np9BUQQUjo0e4j0QM2J?si=a91d70e9226b4baf',
                                'https://open.spotify.com/track/0ytvsZOerGzUWfHXVT2Sgy?si=0caabeeaba2142cc',
                                'https://open.spotify.com/track/5qC17VMNoZdF2gAw28FtsV?si=f26fc303852b4e63',
                                'https://open.spotify.com/track/2RycgtfFQZOPgEGrzBGE0j?si=fd5dacc62b3c42b2 '
                
                            ],
                            Love: [ 
                                'https://open.spotify.com/track/4usmeZGpIjHaEDhPcD29dg?si=ea5ccf46a31d4d16',
                                'https://open.spotify.com/track/4lqWAXNZdxWXfDg0X66Cgz?si=7d7e5d8d5cf1420f',
                                'https://open.spotify.com/track/5U9LP1keJnKYFfWQnwEJ2f?si=93fe9104d2114a34',
                                'https://open.spotify.com/track/3CYqHs1OZcb7UnWQX11ta7?si=b03e2103b9d34ce3',
                                'https://open.spotify.com/track/5u720Ok6Eu5chQksGz6E1r?si=3cf2a35047f24885',
                                'https://open.spotify.com/track/5rDXfGMWI6S8wkXR0MHsvv?si=49af2a7ec34b4f49',
                                'https://open.spotify.com/track/2P6qhc0PFVsu9xtoNfsBuo?si=281069eb18c44e85',
                                'https://open.spotify.com/track/1aEsTgCsv8nOjEgyEoRCpS?si=809e98b062cb4e72',
                                'https://open.spotify.com/track/1is8gU4RVcN4J8xItxWoOY?si=faa96fca875d4cd9',
                                'https://open.spotify.com/track/16XiTUC2rQvb5lmtOm3FYY?si=ec48bbc7ce264085 '
                                
                            ],
                            Sleepy: [
                                'https://open.spotify.com/track/5lPvUiyvXEHMsiuOybY1Dc?si=8e9c0553d021493b',
                                'https://open.spotify.com/track/3B76b41yF88QMw2pEuHSbu?si=0deb9e3a20c34e61',
                                'https://open.spotify.com/track/2kf37pB9SKZvEBGfCKDMvF?si=ee8aaba3690f48b7',
                                'https://open.spotify.com/track/32tcOarl902xsb3Rii178h?si=3d3a0a92f5244c6a',
                                'https://open.spotify.com/track/4WbTS3tKGfxNxNAU6rjq8a?si=72a9357d06334bb4',
                                'https://open.spotify.com/track/3VBADJVrLwGoM0Xbq9z37S?si=d6e16b3304d547ba',
                                'https://open.spotify.com/track/40frhLpVMThTogyowcdNtb?si=2ab39bd438cb40a1',
                                'https://open.spotify.com/track/3ImDPdVam36fsjK1knH8sb?si=ccef236dbcc54f55',
                                'https://open.spotify.com/track/6lKuDS6wWeWfqtjzWAbsIh?si=58f48959455d4f43',
                                'https://open.spotify.com/track/0I5cNbge7UENEL9AQZBjKa?si=8779e297915a4ff9 '
                
                            ],
                            Bored: [  
                                'https://open.spotify.com/track/1gH1h30wkQdd9zhY3j7a8T?si=f97a92770f40482d',
                                'https://open.spotify.com/track/2Zo1PcszsT9WQ0ANntJbID?si=9d3c4de1eb78488c',
                                'https://open.spotify.com/track/3qoftcUZaUOncvIYjFSPdE?si=f87284160e1f4518',
                                'https://open.spotify.com/track/2hloaUoRonYssMuqLCBLTX?si=3750ac1d26464ffd',
                                'https://open.spotify.com/track/39LLxExYz6ewLAcYrzQQyP?si=69265a4d06544a8d',
                                'https://open.spotify.com/track/2Lumsra3kuU61wXkEKzKaK?si=e67ccf3b312a4b67',
                                'https://open.spotify.com/track/3l9wuxFDzUCKSYdP0M4Iai?si=9a212d3bd5be430f',
                                'https://open.spotify.com/track/0O45fw2L5vsWpdsOdXwNAR?si=2ed047ec591b4f0f',
                                'https://open.spotify.com/track/2FDTHlrBguDzQkp7PVj16Q?si=e3cb3a1bcff64878',
                                'https://open.spotify.com/track/5KkCsYIgMK5H7Ih31Dnd2Q?si=a4482b29ce27410f'
                            ],
                            Tired: [
                               'https://open.spotify.com/track/5E30LdtzQTGqRvNd7l6kG5?si=24a3c906cf4a432a',
                               'https://open.spotify.com/track/1ZgMsA55GIY7ICkQh5MILA?si=205bb5ff3b3c4d70',
                               'https://open.spotify.com/track/0yc6Gst2xkRu0eMLeRMGCX?si=88391991369f4030',
                               'https://open.spotify.com/track/7DcJ6fEBb7BaKuYKTwiDxK?si=8b424d9b5d6e4579',
                               'https://open.spotify.com/track/37y7iDayfwm3WXn5BiAoRk?si=55ead97665c04201',
                               'https://open.spotify.com/track/58ge6dfP91o9oXMzq3XkIS?si=700f2157520443ab',
                               'https://open.spotify.com/track/58ge6dfP91o9oXMzq3XkIS?si=077f724f4b3f4c6c',
                               'https://open.spotify.com/track/45ROR8UMn60YEVQnDy0uVF?si=2307a35069e2424a',
                               'https://open.spotify.com/track/1xK59OXxi2TAAAbmZK0kBL?si=1e9a82bd140c4f10',
                               'https://open.spotify.com/track/1Fid2jjqsHViMX6xNH70hE?si=32a65700f9534ab7',
                               'https://open.spotify.com/track/56TOfxnRzSRbFRw8J6C4IT?si=67a86912ae344e86',
                               'https://open.spotify.com/track/1NZs6n6hl8UuMaX0UC0YTz?si=dc327a129a924b73'
                
                            ],
                           
                            Excited: [
                                'https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH?si=bdcdcac507eb4edf',
                                'https://open.spotify.com/track/04F42oEuKrRComYJfJuyVR?si=30654b68cb304801',
                                'https://open.spotify.com/track/4y5bvROuBDPr5fuwXbIBZR?si=87973a2f8c8a4af2',
                                'https://open.spotify.com/track/2HRqTpkrJO5ggZyyK6NPWz?si=d0dcc4bce5454d07',
                                'https://open.spotify.com/track/4cluDES4hQEUhmXj6TXkSo?si=7fdbcb18b1ec4410',
                                'https://open.spotify.com/track/0rzaRSujxA0bKyjJl6vHYq?si=4c6ed59f6ff54b98',
                                'https://open.spotify.com/track/6FfLg6FFqhCsrFOaHIGkg0?si=11a63ffe85154033',
                                'https://open.spotify.com/track/3VCXx37jNGNOMns6z2OnvJ?si=455c70ad86cd4a55',
                                'https://open.spotify.com/track/39GcR1iJpR2RX629O0zuW5?si=c9f7a85c1dfa4b0e',
                                'https://open.spotify.com/track/2Lumsra3kuU61wXkEKzKaK?si=45185cd88c1a4292',
                                'https://open.spotify.com/track/7rC3P7tpWriaC4hYWKwGQd?si=a09ab076e5534c34',
                                'https://open.spotify.com/track/2plbrEY59IikOBgBGLjaoe?si=568d92b9d9a14fda'
                            ]
            
        };

        const moodUrls = songUrls[mood];
        if (moodUrls && moodUrls.length > 0) {
            const randomUrl = moodUrls[Math.floor(Math.random() * moodUrls.length)];
            setSongUrl(randomUrl);
        }
    };

    return (
        <div className="my-music-container">
            <video autoPlay muted loop className="background-video">
                <source src={backgroundVideo} type="video/mp4" />
            </video>
            <div className="content">
                <h2>Current Mood: {mood}</h2>
                {songUrl && (
                    <p>
                        <a href={songUrl} target="_blank" rel="noopener noreferrer">
                            Click here to listen to a song
                        </a>
                    </p>
                )}
            </div>
        </div>
    );
};

export default MyMusic;
*/




























import React, { useEffect, useState } from 'react';
import './MyMusic.css';
import backgroundVideo from './video1.mp4';

const MyMusic = () => {
    const [mood, setMood] = useState('');
    const [songUrl, setSongUrl] = useState('');

    useEffect(() => {
        const selectedMood = localStorage.getItem('selectedMood');
        setMood(selectedMood);
        if (selectedMood) {
            fetchSongUrl(selectedMood);
        }
    }, []);

    const fetchSongUrl = (mood) => {
        const songUrls = {


            Anger: [ 
                'https://open.spotify.com/track/0ZZ0sbQhALzXTEzd6AbLMa?si=909ac2824bc745c4',
                'https://open.spotify.com/track/4OFFfqeoN8GmwxUi5zrquE?si=81aae7e712ad4705',
                'https://open.spotify.com/track/2Ec1iryNc1k6zkv1Nezz0F?si=e9f968ef6ce647ce',
                'https://open.spotify.com/track/5Y9sCzbsygH3EUA7YmwYql?si=3c655fabaf3d4183',
                'https://open.spotify.com/track/3BamLgSS5spS9pDMRUC4nW?si=1eb825e1e0624472',
                'https://open.spotify.com/track/2Fz1wFaIew3srIjazAZwUK?si=58437af826e04c4d',
                'https://open.spotify.com/track/2xDzPSYenRS2WubsuBE7Pc?si=ae1cab9c898b4fb4',
                'https://open.spotify.com/track/3uYaIlSK2FtiOkYB9goH2D?si=615a11a6772b4126',
                'https://open.spotify.com/track/0u9zPSQpdAiNBJjfAMLxoZ?si=e045a59572964b7f',
                'https://open.spotify.com/track/6J6Cqx61NLa6OjBh164vAv?si=af383ae7585d4388',
                'https://open.spotify.com/track/4G4jwX2cL85U1RSe0qvsxC?si=8f54ef86dabe4233'
            ],
            Sad: [ 
                'https://open.spotify.com/track/1ldyyMM61fKaSUiWnZNp03?si=edc20e17c90e4e76',
                'https://open.spotify.com/track/2pJmmSzJzgyBwUhyqqNntp?si=99568f8066274430',
                'https://open.spotify.com/track/501Cc7uHAE8rUkE1ey5P5k?si=82b0eecb12de4406',
                'https://open.spotify.com/track/1JeftR8QWUfMGCM0VLp1Jz?si=d85e1aa2144d4b5c',
                'https://open.spotify.com/track/0HFPMPIPGy0o9ocbHMNz2P?si=2925c44ee6f2414d',
                'https://open.spotify.com/track/0HFPMPIPGy0o9ocbHMNz2P?si=2925c44ee6f2414d',
                'https://open.spotify.com/track/6xGruZOHLs39ZbVccQTuPZ?si=0714c8c3f0e64e84',
                'https://open.spotify.com/track/3AJwUDP919kvQ9QcozQPxg?si=8e3176b6de5e425a',
                'https://open.spotify.com/track/7LVHVU3tWfcxj5aiPFEW4Q?si=1d274774e6b54ab8',
                'https://open.spotify.com/track/2e4oIsOkGJNQ4Ab9sjOm52?si=2d816b94140d4fc1'
            ],

            Happy: [
                'https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH?si=bdcdcac507eb4edf',
                'https://open.spotify.com/track/04F42oEuKrRComYJfJuyVR?si=30654b68cb304801',
                'https://open.spotify.com/track/4y5bvROuBDPr5fuwXbIBZR?si=87973a2f8c8a4af2',
                'https://open.spotify.com/track/2HRqTpkrJO5ggZyyK6NPWz?si=d0dcc4bce5454d07',
                'https://open.spotify.com/track/4cluDES4hQEUhmXj6TXkSo?si=7fdbcb18b1ec4410',
                'https://open.spotify.com/track/0rzaRSujxA0bKyjJl6vHYq?si=4c6ed59f6ff54b98',
                'https://open.spotify.com/track/6FfLg6FFqhCsrFOaHIGkg0?si=11a63ffe85154033',
                'https://open.spotify.com/track/3VCXx37jNGNOMns6z2OnvJ?si=455c70ad86cd4a55',
                'https://open.spotify.com/track/39GcR1iJpR2RX629O0zuW5?si=c9f7a85c1dfa4b0e',
                'https://open.spotify.com/track/2Lumsra3kuU61wXkEKzKaK?si=45185cd88c1a4292',
                'https://open.spotify.com/track/7rC3P7tpWriaC4hYWKwGQd?si=a09ab076e5534c34',
                'https://open.spotify.com/track/2plbrEY59IikOBgBGLjaoe?si=568d92b9d9a14fda'
               
            ],

            Tensed: [ 
                'https://open.spotify.com/track/5NflwXmtFcWnMMorwdsawy?si=457259833f254f21',
                'https://open.spotify.com/track/6NXaCvBai7L0xlcWXElHY2?si=f1dab596134f4388',
                'https://open.spotify.com/track/6WwSZisf4dC6xqUKrRcpHl?si=a04507d529314709',
                'https://open.spotify.com/track/4BpcPtOKnRtX9opae8deLi?si=bba7516cffae45ce',
                'https://open.spotify.com/track/09SelFwWSbRRf8AiMsZm41?si=2ff28fb37a1940f0',
                'https://open.spotify.com/track/20nhoFPhyUGokEAbtSEHJi?si=63ce4af37efa4b80',
                'https://open.spotify.com/track/5SLIvHsHJTrYTjRoby6Z3T?si=d3251c256f8c4c69',
                'https://open.spotify.com/track/7m9U8gRy5ahKWHtdT037Qr?si=eb5e555f84a14f2d',
                'https://open.spotify.com/track/577ymzx9s8rMFmDvFYjqCp?si=75c6b747faaa44d8',
                'https://open.spotify.com/track/1x5nSYVPDfkI6DVnDHMKy8?si=e939be551d8348e1 '

            ],

            Sick: [ 
                'https://open.spotify.com/track/7JgZbix8xDasAhbn3N7eIF?si=45a39653dae84ed3',
                'https://open.spotify.com/track/5qC17VMNoZdF2gAw28FtsV?si=75dfe277422e4146',
                'https://open.spotify.com/track/19JzJOMs4wkuKxY8WEOMea?si=b737d3ae9a034acb',
                'https://open.spotify.com/track/0oX75M5oIgft6yF9F8ror7?si=1f5fafdddac44e39',
                'https://open.spotify.com/track/4pAjQMx0HQFUDHv9J9mtQw?si=e594598927b04abf',
                'https://open.spotify.com/track/1B3np9BUQQUjo0e4j0QM2J?si=a91d70e9226b4baf',
                'https://open.spotify.com/track/0ytvsZOerGzUWfHXVT2Sgy?si=0caabeeaba2142cc',
                'https://open.spotify.com/track/5qC17VMNoZdF2gAw28FtsV?si=f26fc303852b4e63',
                'https://open.spotify.com/track/2RycgtfFQZOPgEGrzBGE0j?si=fd5dacc62b3c42b2 '

            ],
            Love: [ 
                'https://open.spotify.com/track/4usmeZGpIjHaEDhPcD29dg?si=ea5ccf46a31d4d16',
                'https://open.spotify.com/track/4lqWAXNZdxWXfDg0X66Cgz?si=7d7e5d8d5cf1420f',
                'https://open.spotify.com/track/5U9LP1keJnKYFfWQnwEJ2f?si=93fe9104d2114a34',
                'https://open.spotify.com/track/3CYqHs1OZcb7UnWQX11ta7?si=b03e2103b9d34ce3',
                'https://open.spotify.com/track/5u720Ok6Eu5chQksGz6E1r?si=3cf2a35047f24885',
                'https://open.spotify.com/track/5rDXfGMWI6S8wkXR0MHsvv?si=49af2a7ec34b4f49',
                'https://open.spotify.com/track/2P6qhc0PFVsu9xtoNfsBuo?si=281069eb18c44e85',
                'https://open.spotify.com/track/1aEsTgCsv8nOjEgyEoRCpS?si=809e98b062cb4e72',
                'https://open.spotify.com/track/1is8gU4RVcN4J8xItxWoOY?si=faa96fca875d4cd9',
                'https://open.spotify.com/track/16XiTUC2rQvb5lmtOm3FYY?si=ec48bbc7ce264085 '
                
            ],
            Sleepy: [
                'https://open.spotify.com/track/5lPvUiyvXEHMsiuOybY1Dc?si=8e9c0553d021493b',
                'https://open.spotify.com/track/3B76b41yF88QMw2pEuHSbu?si=0deb9e3a20c34e61',
                'https://open.spotify.com/track/2kf37pB9SKZvEBGfCKDMvF?si=ee8aaba3690f48b7',
                'https://open.spotify.com/track/32tcOarl902xsb3Rii178h?si=3d3a0a92f5244c6a',
                'https://open.spotify.com/track/4WbTS3tKGfxNxNAU6rjq8a?si=72a9357d06334bb4',
                'https://open.spotify.com/track/3VBADJVrLwGoM0Xbq9z37S?si=d6e16b3304d547ba',
                'https://open.spotify.com/track/40frhLpVMThTogyowcdNtb?si=2ab39bd438cb40a1',
                'https://open.spotify.com/track/3ImDPdVam36fsjK1knH8sb?si=ccef236dbcc54f55',
                'https://open.spotify.com/track/6lKuDS6wWeWfqtjzWAbsIh?si=58f48959455d4f43',
                'https://open.spotify.com/track/0I5cNbge7UENEL9AQZBjKa?si=8779e297915a4ff9 '

            ],
            Bored: [  
                'https://open.spotify.com/track/1gH1h30wkQdd9zhY3j7a8T?si=f97a92770f40482d',
                'https://open.spotify.com/track/2Zo1PcszsT9WQ0ANntJbID?si=9d3c4de1eb78488c',
                'https://open.spotify.com/track/3qoftcUZaUOncvIYjFSPdE?si=f87284160e1f4518',
                'https://open.spotify.com/track/2hloaUoRonYssMuqLCBLTX?si=3750ac1d26464ffd',
                'https://open.spotify.com/track/39LLxExYz6ewLAcYrzQQyP?si=69265a4d06544a8d',
                'https://open.spotify.com/track/2Lumsra3kuU61wXkEKzKaK?si=e67ccf3b312a4b67',
                'https://open.spotify.com/track/3l9wuxFDzUCKSYdP0M4Iai?si=9a212d3bd5be430f',
                'https://open.spotify.com/track/0O45fw2L5vsWpdsOdXwNAR?si=2ed047ec591b4f0f',
                'https://open.spotify.com/track/2FDTHlrBguDzQkp7PVj16Q?si=e3cb3a1bcff64878',
                'https://open.spotify.com/track/5KkCsYIgMK5H7Ih31Dnd2Q?si=a4482b29ce27410f'
            ],
            Tired: [
               'https://open.spotify.com/track/5E30LdtzQTGqRvNd7l6kG5?si=24a3c906cf4a432a',
               'https://open.spotify.com/track/1ZgMsA55GIY7ICkQh5MILA?si=205bb5ff3b3c4d70',
               'https://open.spotify.com/track/0yc6Gst2xkRu0eMLeRMGCX?si=88391991369f4030',
               'https://open.spotify.com/track/7DcJ6fEBb7BaKuYKTwiDxK?si=8b424d9b5d6e4579',
               'https://open.spotify.com/track/37y7iDayfwm3WXn5BiAoRk?si=55ead97665c04201',
               'https://open.spotify.com/track/58ge6dfP91o9oXMzq3XkIS?si=700f2157520443ab',
               'https://open.spotify.com/track/58ge6dfP91o9oXMzq3XkIS?si=077f724f4b3f4c6c',
               'https://open.spotify.com/track/45ROR8UMn60YEVQnDy0uVF?si=2307a35069e2424a',
               'https://open.spotify.com/track/1xK59OXxi2TAAAbmZK0kBL?si=1e9a82bd140c4f10',
               'https://open.spotify.com/track/1Fid2jjqsHViMX6xNH70hE?si=32a65700f9534ab7',
               'https://open.spotify.com/track/56TOfxnRzSRbFRw8J6C4IT?si=67a86912ae344e86',
               'https://open.spotify.com/track/1NZs6n6hl8UuMaX0UC0YTz?si=dc327a129a924b73'

            ],
           
            Excited: [
                'https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH?si=bdcdcac507eb4edf',
                'https://open.spotify.com/track/04F42oEuKrRComYJfJuyVR?si=30654b68cb304801',
                'https://open.spotify.com/track/4y5bvROuBDPr5fuwXbIBZR?si=87973a2f8c8a4af2',
                'https://open.spotify.com/track/2HRqTpkrJO5ggZyyK6NPWz?si=d0dcc4bce5454d07',
                'https://open.spotify.com/track/4cluDES4hQEUhmXj6TXkSo?si=7fdbcb18b1ec4410',
                'https://open.spotify.com/track/0rzaRSujxA0bKyjJl6vHYq?si=4c6ed59f6ff54b98',
                'https://open.spotify.com/track/6FfLg6FFqhCsrFOaHIGkg0?si=11a63ffe85154033',
                'https://open.spotify.com/track/3VCXx37jNGNOMns6z2OnvJ?si=455c70ad86cd4a55',
                'https://open.spotify.com/track/39GcR1iJpR2RX629O0zuW5?si=c9f7a85c1dfa4b0e',
                'https://open.spotify.com/track/2Lumsra3kuU61wXkEKzKaK?si=45185cd88c1a4292',
                'https://open.spotify.com/track/7rC3P7tpWriaC4hYWKwGQd?si=a09ab076e5534c34',
                'https://open.spotify.com/track/2plbrEY59IikOBgBGLjaoe?si=568d92b9d9a14fda'
            ]




        };
        const urls = songUrls[mood];
        if (urls) {
            const randomUrl = urls[Math.floor(Math.random() * urls.length)];
            setSongUrl(randomUrl);
        }
    };

    return (
        <div className="music-content">
            <video className="background-video" src={backgroundVideo} autoPlay loop muted />
            <div className="mood-text">Current Mood: {mood || 'No mood selected'}</div>
            {songUrl && (
                <a href={songUrl} target="_blank" rel="noopener noreferrer" className="fetch-button">
                    Click here to listen!
                </a>
            )}
        </div>
    );
};

export default MyMusic;
