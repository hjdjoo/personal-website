import PortfolioHeader from "../_components/PortfolioHeader";
import EngineeringContainer from "./_containers/EngineeringContainer";
import getProjectData from "@/utils/supabase/clientActions/getProjectData";

export default async function EngineeringPage() {

  const { data, error } = await getProjectData("engineering");

  if (error) {
    throw new Error("Error while querying db")
  }

  const beersFlowers = data.filter((project) => {
    return project.projectName === "Beers Flower Shop"
  });

  const otherProjects = data.filter((project => { return project.projectName !== "Beers Flower Shop" }))

  const projects = beersFlowers.concat(otherProjects);

  return (
    <>
      <EngineeringContainer projects={projects}>
        <PortfolioHeader category="engineering" />
      </EngineeringContainer>
    </>
  )
}