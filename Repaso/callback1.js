const fs=require('fs');
const nombreArchivo = 'miArchivo.txt';
const contenidoAAgregar='Esto es una prueba 2\n';
fs.readFile(nombreArchivo,
    'utf-8',
    (error, contenidoArchivo) => {  // Callback
        if (error) {
            console.error(error);
            try {
                throw new Error(error);
            } catch (e) {
                console.log(e);
            }
            console.log('Extra')
        } else {
            // Callback Hell!
            fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                if (err) throw err;
                console.log('Archivo completado!');
                fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                    if (err) throw err;
                    console.log('Archivo completado!');
                    fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                        if (err) throw err;
                        console.log('Archivo completado!');
                        fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                            if (err) throw err;
                            console.log('Archivo completado!');
                            fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                if (err) throw err;
                                console.log('Archivo completado!');
                                fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                    if (err) throw err;
                                    console.log('Archivo completado!');
                                    fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                        if (err) throw err;
                                        console.log('Archivo completado!');
                                        fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                            if (err) throw err;
                                            console.log('Archivo completado!');
                                            fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                                if (err) throw err;
                                                console.log('Archivo completado!');
                                                fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                                    if (err) throw err;
                                                    console.log('Archivo completado!');
                                                    fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                                        if (err) throw err;
                                                        console.log('Archivo completado!');
                                                        fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                                            if (err) throw err;
                                                            console.log('Archivo completado!');
                                                            fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                                                if (err) throw err;
                                                                console.log('Archivo completado!');
                                                                fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                                                    if (err) throw err;
                                                                    console.log('Archivo completado!');
                                                                    fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                                                        if (err) throw err;
                                                                        console.log('Archivo completado!');
                                                                        fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                                                            if (err) throw err;
                                                                            console.log('Archivo completado!');
                                                                            fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                                                                if (err) throw err;
                                                                                console.log('Archivo completado!');
                                                                                fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                                                                    if (err) throw err;
                                                                                    console.log('Archivo completado!');

                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });

        }
    });