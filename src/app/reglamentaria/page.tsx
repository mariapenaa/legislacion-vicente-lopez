import MainFormPage from "@/pages/MainFormPage";


export default function Reglamentaria() {
  const temaOptions = [
    { value: 10, label: "Ten" },
    { value: 20, label: "Twenty" },
    { value: 30, label: "Thirty" }
  ];

  const subtemaOptions = [
    { value: 10, label: "Ten" },
    { value: 20, label: "Twenty" },
    { value: 30, label: "Thirty" }
  ];

  return (
    <MainFormPage
      title="Reglamentario"
      subtitle="Consultá de manera simple y ágil la reglamentación"
      temaOptions={temaOptions}
      subtemaOptions={subtemaOptions}
      route="reglamentaria/resultados"
    />
  );
}
