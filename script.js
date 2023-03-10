const _hr = document.querySelector("._hr")
      const _min = document.querySelector("._min")
      const _sec = document.querySelector("._sec")
      const _dec_sec = document.querySelector("._dec_sec")
      const _h3 = document.querySelector("._h3")

      // Criação das variáveis ********************

     
        let data = new Date()
        let hora = data.getHours()
        let min = data.getMinutes()
        let sec = data.getSeconds()

        hora = hora.toString().padStart(2, "0")
        min = min.toString().padStart(2, "0")
        sec = sec.toString().padStart(2, "0")

        _hora_topo = document.querySelector("._hora")
        _hora_topo.innerHTML = `${hora}:${min} hs`
    

      let h = 0
      let m = 0
      let s = 0

      // ************************************************* */

      let is_Paused = false

      // Criei para não chamar o setInterval() no
      // start quando ele ja estiver rodando , se não faz isso o cronometro
      // fica doido pois o setInterval() é chamado novamente no click

      //************************************************* */

      // Seta as variáveis com 0

      _default_val = () => {
        h = 0
        m = 0
        s = 0
      }

      // função para adicionar zero a esquerda dos numeros menores que 10

      _zero_a_esq = () => {
        s = s.toString().padStart(2, "0")
        m = m.toString().padStart(2, "0")
        h = h.toString().padStart(2, "0")
      }

      // Cronometro Geral

      _cronometro = () => {
        s++

        if (s === 60) {
          m++
          s = 0
        }

        if (m === 60) {
          h++
          m = 0
        }
        if (h === 24) {
          h++
        }
        _zero_a_esq()
        _h3.innerHTML = `${h}:${m}:${s}`
      }

      // Inicia o cronômetro

      _start_Interval = () => {
        if (!is_Paused) {
          _interval = setInterval(() => {
            _cronometro()
          }, 1000)
          is_Paused = true
          let _h3 = document.querySelector("._h3")
          _h3.style.color = "white"
        }
      }

      // Pausa o cronômetro

      _pause_Interval = () => {
        clearInterval(_interval)
        is_Paused = false
        let _h3 = document.querySelector("._h3")
        _h3.style.color = "#8c9944"
      }

      // Para e zera o cronômetro

      _stop = () => {
        _default_val()
        _zero_a_esq()
        _h3.innerHTML = `${h}:${m}:${s}`
        clearInterval(_interval)
        is_Paused = false
        _h3.style.color = "white"
       
      }