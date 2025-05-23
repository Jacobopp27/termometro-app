const preguntas = [
    {
        seccion: "Diagnóstico",
        items: [
            {
                texto: "¿Contempla cómo las acciones impactan de forma distinta a hombres, mujeres y otras identidades?",
                opciones: [
                    "0: No tiene en cuenta diferencias",
                    "1: Reconoce diferencias, pero no las analiza",
                    "2: Analiza e incorpora el enfoque diferencial"
                ]
            },
            {
                texto: "¿Se han identificado y abordado barreras que podrían limitar la participación de mujeres?",
                opciones: [
                    "0: No se identifican",
                    "1: Se reconocen sin medidas específicas",
                    "2: Se aplican estrategias concretas para superarlas"
                ]
            },
            {
                texto: "¿Se ha reflexionado sobre cómo las desigualdades de género se cruzan con otras condiciones (etnia, juventud, pobreza, discapacidad)?",
                opciones: [
                    "0: No se considera",
                    "1: Se menciona sin aplicarse",
                    "2: Se analiza e integra en el diagnóstico y diseño"
                ]
            }
        ]
    },
    {
        seccion: "Equipo de trabajo",
        items: [
            {
                texto: "¿Se ha brindado capacitación al equipo sobre equidad de género o transversalización del enfoque de género?",
                opciones: [
                    "0: Sin formación",
                    "1: Parcial o reciente, sin aplicación",
                    "2: Formación aplicada, técnica y actitudinal"
                ]
            }
        ]
    },
    {
        seccion: "Diseño",
        items: [
            {
                texto: "¿Los objetivos incluyen metas para disminuir brechas de género?",
                opciones: [
                    "0: No hay objetivos relacionados",
                    "1: Objetivos generales con implicaciones indirectas",
                    "2: Objetivos explícitos para reducir brechas"
                ]
            },
            {
                texto: "¿Los datos utilizados en el proyecto están desagregados por sexo?",
                opciones: [
                    "0: No hay datos desagregados",
                    "1: Algunos datos están desagregados",
                    "2: Datos desagregados y con análisis interpretativo"
                ]
            },
            {
                texto: "¿Se incorporan las medidas abordadas en el protocolo de Violencias Basadas en Género (VBG)?",
                opciones: [
                    "0: No se identifica el protocolo",
                    "1: Se aluden medidas pero no se conoce el protocolo",
                    "2: Se conoce y se implementa el protocolo"
                ]
            }
        ]
    },
    {
        seccion: "Población participante",
        items: [
            {
                texto: "¿Se garantiza la participación de mujeres en espacios de consulta, planeación o toma de decisiones?",
                opciones: [
                    "0: No se promueve la participación",
                    "1: Se realiza consulta sin incidencia en decisiones",
                    "2: Participación e incidencia en la toma de decisiones"
                ]
            },
            {
                texto: "¿El proyecto incluye acciones afirmativas para los diferentes contextos de las mujeres?",
                opciones: [
                    "0: No incluye acciones afirmativas",
                    "1: Algunas acciones simbólicas o indirectas",
                    "2: Se implementan acciones específicas y sostenidas"
                ]
            }
    ]
    },
    {
        seccion: "Recursos asignados",
        items: [
            {
                texto: "¿El proyecto está trazado en alguna de las líneas del trazador presupuestal de género?",
                opciones: [
                    "0: No hay recursos asignados",
                    "1: Recursos mínimos o no trazables",
                    "2: Recursos clasificados en alguna de las líneas del trazador"
                ]
            },
            {
                texto: "¿Se asignan recursos específicos en el presupuesto para reducir desigualdades de género?",
                opciones: [
                    "0: No hay asignación específica",
                    "1: Recursos generales o simbólicos",
                    "2: Presupuesto claro, trazable y con enfoque de género"
                ]
            }
        ]
    },
    {
        seccion: "Indicadores y evaluación",
        items: [
            {
                texto: "¿Se han definido indicadores específicos para medir efecto en la equidad de género?",
                opciones: [
                    "0: No existen",
                    "1: Se plantean de forma general",
                    "2: Indicadores claros y diseñados con enfoque de género"
                ]
            },
            {
                texto: "¿Se incluye una evaluación de cómo el proyecto contribuye a reducir las brechas de género?",
                opciones: [
                    "0: No se contempla la evaluación",
                    "1: Evaluación general o parcial",
                    "2: Evaluación enfocada en género con análisis e impacto"
                ]
            },
            {
                texto: "¿El proyecto contribuye a transformar imaginarios, estereotipos o normas de género?",
                opciones: [
                    "0: Reproduce roles y estereotipos",
                    "1: Reconoce estereotipos",
                    "2: Los confronta activamente"
                ]
            }
        ]
    }
];

export default preguntas;
