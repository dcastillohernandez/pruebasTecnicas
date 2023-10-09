// Solución con TypeScript.
// Usaremos una técnica de resolución de problemas llamada Backtracking (vuelta atrás),
// la cual podremos aplicar en diversos algoritmos;

const retoConBacktracking = (numeros: number[], resultado: number) => {
    const result: number[][] = [];

    const backtrack = (start: number, currentCombination: number[]) => {
        const sum = currentCombination.reduce((acc, value) => acc + value, 0);

        if (sum === resultado) {
            result.push([...currentCombination]);
            return;
        }

        if (sum > resultado || start === numeros.length) {
            return;
        }

        for (let i = start; i < numeros.length; i++) {
            currentCombination.push(numeros[i]);
            backtrack(i + 1, currentCombination);
            currentCombination.pop();
        }
    };

    backtrack(0, []);

    return result;
};

const list: number[] = [19, 1, 20, 0, 2, 18, 15, 5, 6, 4, 4, 4, 4, 20];
const target: number = 6;

console.log(retoConBacktracking(list, target));
