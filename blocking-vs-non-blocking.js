const {
    readFileSync,
    writeFileSync,
    readFile,
    writeFile,
} = require ('fs')

const {
    join, 
} = require ('path')


const logDuration = (label, startTime) => {
console.log(`${label} levou ${Date.now() - startTime}ms`)
}


const copyFileBlocking = (source, dest) => {
    const startTime = Date.now()
console.log('Lendo Blocking conteudo')
    const content = readFileSync(source)
console.log('Escrevendo Blocking conteudo')
writeFileSync(dest, content)
logDuration('copyFileBlocking', startTime)
}

const sourcePath = join(__dirname, 'files', 'exemple.txt')
const destPath = join (__dirname, 'files', 'exemple.copy.blocking.txt')



copyFileBlocking(sourcePath, destPath)
console.log('Copia blocking com sucesso')

console.log('*' .repeat(50))

const copyFileNonBlocking = (source, dest) => {
    const startTime = Date.now()
    console.log('Começou a copiar non-blocking')

    readFile(source, (_err, data) => {
    console.log('> Terminou de ler non-blocking')

    writeFile(dest, data, (_err) => {
    console.log('>> Terminou de escrever non-blocking')

    logDuration ('copyFileNonBlocking', startTime)
    })

})


}

const destPathNonBlocking = join (__dirname, 'files', 'example.copy.non-blocking.txt')

copyFileNonBlocking(sourcePath, destPathNonBlocking)

console.log ('Terminou mesmo ?')

console.log (
    'Continuando',
    1 + 1, 
    Math.PI * Math.E,
)

