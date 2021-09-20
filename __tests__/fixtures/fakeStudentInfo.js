export default function createFakeStudentInfo(overrides) {
  const schoolTypes = ['EMR', 'EMI', 'EJA', 'Outro'];

  const federativeUnits = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
    'DF',
  ];

  const disciplines = [
    'Artes',
    'Biologia',
    'Espanhol',
    'Física',
    'Geografia',
    'História',
    'Inglês',
    'Literatura',
    'Matemática',
    'Português',
    'Química',
    'Redação',
  ];

  const weakDisciplines = [];

  for (let i = 0; i < Math.floor(Math.random() * 12); i++) {
    weakDisciplines.push(disciplines[Math.floor(Math.random() * 12)]);
  }

  const studentInfo = {
    timesReproved: Math.floor(Math.random() * 5),
    schoolYear: Math.floor(Math.random() * 3) + 1,
    schoolType: schoolTypes[Math.floor(Math.random() * 4)],
    federativeUnit: federativeUnits[Math.floor(Math.random() * 28)],
    weakDisciplines,
    userId: Math.floor(Math.random() * 1000),
  };

  return {
    ...studentInfo,
    ...overrides,
  };
}
