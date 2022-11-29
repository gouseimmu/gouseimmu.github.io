import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
const Stats = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 7;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <div id="stats">
      <Text textAlign={"center"} fontWeight={"bold"} fontSize={"30px"} mb="20px">
        GITHUB STATS
      </Text>
      <SimpleGrid columns={[1, 1, 2, 2]} spacing={10}  alignItems={"center"} >
        <Box m={"auto"} p={"15px"}>

       
        <a
          href="https://github.com/gouseimmu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=gouseimmu&theme=dark"
            alt="_stats"
          />
        </a>
        </Box>
        <Box m={"auto"} p={"15px"}>
        <GitHubCalendar
          username="gouseimmu"
          transformData={selectLastHalfYear}
          hideTotalCount
          hideColorLegend
        >
          <ReactTooltip delayShow={20} html />
        </GitHubCalendar>
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
