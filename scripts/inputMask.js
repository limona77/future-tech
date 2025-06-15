const rootSelector = '[data-js-input-mask]'

class InputMask {
  constructor(rootElement) {
    this.rootElement = rootElement
    this.init()
  }

  init() {
    const isLibReady = typeof window.IMask !== 'undefined'

    if (isLibReady) {
      console.log("@", this.rootElement.dataset)
      window.IMask(this.rootElement, {
        mask: this.rootElement.dataset.jsInputMask
      })
    }else{
      console.error('Библиотека IMask не подключена')
    }
  }
}

class InputMaskCollections {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new InputMask(element)
    })
  }
}

export default InputMaskCollections
