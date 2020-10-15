const visions = [
  [[4, 35, 4, 210], 'Climate-induced migration', 'Climate-induced migration across borders refers to movement of people driven by extreme or progressive changes in the weather or climate, as well as the impact of climate change on economy and increasing unemployment in the neighbouring countries.'],
  [[4, 15, 4, 190, 4, 330], 'Regional conflicts', 'Increased regional conflict is primarily due to climate change impacting Kenya’s neighbouring countries in the shape of job loss, damage to infrastructure and settlements and scarcity of natural resources. As vulnerable groups cross the borders and enter Kenya in search of better livelihoods, regional conflicts, especially between local communities living along borders, will be intensified.'],
  [[4, 50], 'Unsustainable tourism', 'Kenya has shared ecosystems with its neighbors, with many national parks and reserves being interconnected and dispersed along two or even more countries (e.g. the Serengeti-Mara ecosystem between Tanzania and Kenya). Expansion of nature tourism in neighbouring countries without considerations for environmental conservation and evidence-based environmental policies was identified as an impact that might severely affect Kenya and its parts of the shared ecosystems.'],
  [[4, 245, 4, 345], 'Reduced tourism', 'Shrinking tourism industries in the EAC member countries might as well reduce the revenue from tourism in Kenya and impact the country’s tourism and economy at large.'],
  [[3, 50, 3, 315, 3, 255], 'Increased use of shared water resources by neighbors', 'Water resources, like Lake Victoria, are important and, in some cases, controversial shared natural resources between Kenya and neighbors. In non-collaborative future scenarios (extended SSPs 3,  4 and 5) where disputes arounds the ownership and management of shared resources are prominent, and climate policies are either de-prioritized or only implemented locally, there will be impacts of over-use and degradation of transboundary water, which will result in more cross-border conflicts and increased water security issues.'],
  [[3, 25], 'Pollution', 'Kenya might be impacted by air pollution in the neighbouring countries, especially in the context of fossil-fueled based economies in the neighbouring countries (extended SSP5).'],
  [[3, 235], 'Migration of wildlife', 'The movement of wildlife outside Kenya could potentially impact the country’s tourism industry.'],
  [[3, 215], 'Seasonal migration of livestock', 'Cross-border movement of livestock could pose impacts to agricultural industry and food security.'],
  [[3, 190], 'Migration of invasive species', 'Migration of invasive species is a kind of future ‘wildcard’ which could impact Kenya and other countries in the shape of agricultural challenges, health crisis, etc.'],
  [[2, 40, 2, 230], 'Reduced demand for high carbon exports', 'New climate policies and legislation (e.g. carbon border adjustment mechanisms and carbon taxation) in countries that import goods from Kenya will most likely impose significant barriers to the country’s export capacity.'],
  [[2, 300], 'Limited import and export markets', 'under certain conditions (e.g. in the extended SSP3) imports might be restricted as countries sought to meet domestic demands first or trade with more ‘friendly’ nations. Food imports is an obvious example given in this case.'],
  [[1, 40, 1, 340, 1, 120], 'Reduced official development assistance (ODA)', 'It is anticipated that under conditions of reduced global and regional collaboration, climate change impacts in ODA donor countries would lead them to redistribute resources domestically.'],
  [[1, 220, 1, 300], 'Reduced Foreign direct investment (FDI)', 'Foreign direct investment (FDI) would be less likely to flow into Kenya as investors sought less politically risky investments.'],
  [[1, 150], 'Reduced green climate funds', 'In a more sustainable world (e.g. the extended SSP1), access to dedicated green climate funds would diminish, given that Kenya would be expected to have become a middle-income country with less access to such concessional finance.']
]

const state = () => {
  return {
    visions,
  }
}

export default {
  namespaced: true,
  state
}
