export const QuizeDataLoaders = async () => {
    const quizeData = await fetch('https://openapi.programming-hero.com/api/quiz');
    const data = await quizeData.json();
    return data;
}
