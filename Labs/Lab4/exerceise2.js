{
    const os = require('os')
    const { Observable  } = require('rxjs')

    const checkSystem = () => {
        console.log('Checking your system ...');
        if (os.totalmem() / (1024 * 1024 * 1024) < 4) console.log('This app needs at least 4GB of RAM')
        else if (os.cpus().length < 2) console.log('Processor is not supported')
        else console.log('System is checked successfully.')
    }

    checkSystem();
    console.log('');

    console.log('Observable way');
    var checkSystemObservable = Observable.create((observer) => {
        observer.next('Checking your system ...');
        if (os.totalmem() / (1024 * 1024 * 1024) < 4) observer.next('This app needs at least 4GB of RAM')
        else if (os.cpus().length < 2) observer.next('Processor is not supported')
        else observer.complete()
    })
 
    checkSystemObservable.subscribe({
        next: (x) => { console.log(x) },
        undefined,
        complete: () => console.log('System is checked successfully.'),
    });

}