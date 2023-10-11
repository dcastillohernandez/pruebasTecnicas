//Nota, para facilitar la ejecución de los ejercicios, instalar extención Quokka 

const fibonacci = (number: number) => {
    const result: number[] = [0, 1];

    //Utilizaremos ciclo for para iterar en el array y obtener el resultado.
    for (let i = 2; i <= number; i++) {
        result.push(result[i - 1] + result[i - 2])
    };

    console.log(result);
    return result
};

fibonacci(1)