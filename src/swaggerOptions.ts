export const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Cevichería',
            version: '1.0.0',
            description: 'API REST DE CEVICHERIA'
        },
        components: {
            schemas: {
                Ciudad: {
                    type: 'object',
                    properties: {
                        nombre: {
                            type: 'string'
                        }
                    },
                    required: ['nombre']
                },
                Sector: {
                    type: 'object',
                    properties: {
                        direccion: {
                            type: 'string'
                        },
                        ciudad: {
                            type: 'string'
                        }
                    },
                    required: ['direccion', 'ciudad']
                },
                Cevicheria: {
                    type: 'object',
                    properties: {
                        nombre: {
                            type: 'string'
                        },
                        direccion: {
                            type: 'string'
                        },
                        ruc: {
                            type: 'string'
                        },
                        slogan: {
                            type: 'string'
                        },
                        horario: {
                            type: 'string'
                        },
                        sector: {
                            type: 'string'
                        }
                    },
                    required: ['nombre', 'direccion', 'ruc', 'slogan', 'horario', 'sector']
                },
                Empleado: {
                    type: 'object',
                    properties: {
                        nombre: {
                            type: 'string'
                        },
                        cedula: {
                            type: 'string'
                        },
                        telefono: {
                            type: 'string'
                        },
                        experiencia: {
                            type: 'string'
                        },
                        cevicheria: {
                            type: 'string'
                        }
                    },
                    required: ['nombre', 'cedula', 'telefono', 'experiencia', 'cevicheria']
                },
                Plato: {
                    type: 'object',
                    properties: {
                        nombre: {
                            type: 'string'
                        },
                        precio: {
                            type: 'string'
                        },
                        cevicheria: {
                            type: 'string'
                        }
                    },
                    required: ['nombre', 'precio', 'cevicheria']
                },
                Cliente: {
                    type: 'object',
                    properties: {
                        cedula: {
                            type: 'string'
                        },
                        nombre: {
                            type: 'string'
                        },
                        telefono: {
                            type: 'string'
                        },
                        correo: {
                            type: 'string'
                        }
                    },
                    required: ['cedula', 'nombre', 'telefono', 'correo']
                },
                Pedido: {
                    type: 'object',
                    properties: {
                        detallesorden: {
                            type: 'string'
                        },
                        fecha: {
                            type: 'string'
                        },
                        hora: {
                            type: 'string'
                        },
                        observacion: {
                            type: 'string'
                        },
                        plato: {
                            type: 'string'
                        },
                        cliente: {
                            type: 'string'
                        }
                    },
                    required: ['detallesorden', 'fecha', 'hora', 'observacion', 'plato', 'cliente']
                }
            }
        },

        servers: [
            {
                url: 'http://localhost:9090'
            }
        ]
    },
    apis: ['./build/routes/*.js']
};
