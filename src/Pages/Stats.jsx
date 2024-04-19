import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
const Stats = () => {
  // const selectLastHalfYear = (contributions) => {
  //   const currentYear = new Date().getFullYear();
  //   const currentMonth = new Date().getMonth();
  //   const shownMonths = 10;

  //   return contributions.filter((day) => {
  //     const date = new Date(day.date);
  //     const monthOfDay = date.getMonth();

  //     return (
  //       date.getFullYear() === currentYear &&
  //       monthOfDay > currentMonth - shownMonths &&
  //       monthOfDay <= currentMonth
  //     );
  //   });
  // };
  return (
    <div id="stats">
      <Text
        textAlign={"center"}
        fontWeight={"bold"}
        fontSize={"30px"}
        mb="20px"
      >
        GITHUB STATS
      </Text>
      <SimpleGrid columns={[1, 1, 2, 2]} spacing={10} alignItems={"center"}>
        <Box m={"auto"} p={"15px"} >
          
            <img
              id="github-streak-stats"
              src="https://github-readme-streak-stats.herokuapp.com?user=gouseimmu&theme=dark&hide_border=true"
              alt="_stats"    srcset=""
            />
           
        </Box>
        <Box m={"auto"} p={"15px"}>
          <img
            alt="Gouseimmu"
            src="https://github-readme-activity-graph.cyclic.app/graph?username=gouseimmu&bg_color=0D1117&color=42a5f5&line=42a5f5&point=FFFFFF&hide_border=true&"
          />
        </Box>

        <Box m={"auto"} p={"15px"} class="react-activity-calendar">
          <GitHubCalendar username="gouseimmu" year={2022} class="react-activity-calendar">
            <ReactTooltip delayShow={20} html />
          </GitHubCalendar>
        </Box>
        <Box m={"auto"} p={"15px"}>
          <img
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=gouseimmu&count_private=true&show_icons=true"
            alt="d"
          />
        </Box>
        <Box m={"auto"} p={"15px"}>
          <img
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=gouseimmu&show_icons=true&count_private=true"
            alt="lang"
          />
        </Box>
        
      </SimpleGrid>
    </div>
  );
};

export default Stats;

// </div>
// <div>
// <div>
//

// </div>
// <div>
//   <a href="https://github.com/gouseimmu" target="_blank"  rel="noopener noreferrer"  >
//   <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=gouseimmu"  alt="lang" />
//   </a>
//   <a href="https://github.com/gouseimmu"  target="_blank" rel="noopener noreferrer">
//     <img src="https://github-readme-stats.vercel.app/api?username=gouseimmu&count_private=true&show_icons=true" alt="_sha" />
//   </a>

// </div>

/* <GitHubCalendar  
style={{
    
    width:"100%"
}}
username="gouseimmu"
transformData={selectLastHalfYear}
hideTotalCount
hideColorLegend
>
<ReactTooltip delayShow={20} html />
</GitHubCalendar>
</div>
<div id="str">
<a
href="https://github.com/gouseimmu"
target="_blank"
rel="noopener noreferrer"
>
<img id="streaki"
src="https://github-readme-streak-stats.herokuapp.com?user=gouseimmu&theme=dark"
alt="_stats"
/>
</a> */
