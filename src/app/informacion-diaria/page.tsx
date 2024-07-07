import MainFormPage from "@/pages/MainFormPage";


export default function InformacionDiaria() {
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
      title="Informacion Diaria"
      subtitle="Consultá de manera simple y ágil la información diaria"
      temaOptions={temaOptions}
      subtemaOptions={subtemaOptions}
      route="informacion-diaria/resultados"
    />
  );
}
