import fs from 'node:fs';

const branch = process.env.BRANCH_NAME || 'rama no identificada';
const typecheckOk = process.env.TYPECHECK_OK === 'true';
const jestOk = process.env.JEST_OK === 'true';
const filesOk = process.env.FILES_OK === 'true';

const score = typecheckOk && jestOk && filesOk ? 20 : 0;

const observations = [];

if (!filesOk) {
    observations.push('Se detectaron cambios fuera de hooks/useCounter.tsx.');
}

if (!typecheckOk) {
    observations.push('El proyecto presenta errores de TypeScript.');
}

if (!jestOk) {
    observations.push(
        'El botón Reiniciar o la función resetCounter no cumple la funcionalidad solicitada.',
    );
}

if (observations.length === 0) {
    observations.push(
        'El botón Reiniciar funciona correctamente y devuelve el contador a 0.',
    );
}

const report = `# Resultado automático

- Estudiante / rama: \`${branch.replace('practica/', '')}\`
- Criterio evaluado: Botón Reiniciar y funcionalidad completa.
- Puntaje: **${score}/20**

## Observaciones

${observations.map((item) => `- ${item}`).join('\n')}
`;

fs.writeFileSync('resultado-calificacion.md', report);

fs.writeFileSync(
    'resultado-calificacion.json',
    JSON.stringify(
        {
            branch,
            score,
            typecheckOk,
            jestOk,
            filesOk,
            observations,
        },
        null,
        2,
    ),
);

console.log(report);

if (process.env.GITHUB_STEP_SUMMARY) {
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, report);
}