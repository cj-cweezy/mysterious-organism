// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

function pAequorFactory (num, arr) {
  return {
    specimenNum: num,
    dna: arr,
    //Randomly selects base in dna and mutates it to a different base
    mutate() {
      let x = Math.floor(Math.random() * 15)
      if (this.dna[x] === 'A') {
        const dnaBases = ['C', 'T', 'G']
        this.dna[x] = dnaBases[Math.floor(Math.random() * 3)]
        return this.dna
      }
      else if (this.dna[x] === 'T') {
        const dnaBases = ['A', 'C', 'G']
        this.dna[x] = dnaBases[Math.floor(Math.random() * 3)]
        return this.dna
      }
      else if (this.dna[x] === 'C') {
        const dnaBases = ['A', 'T', 'G']
        this.dna[x] = dnaBases[Math.floor(Math.random() * 3)]
        return this.dna
      }
      else if (this.dna[x] === 'G') {
        const dnaBases = ['C', 'T', 'A']
        this.dna[x] = dnaBases[Math.floor(Math.random() * 3)]
        return this.dna
      }
    },
    //Compares the DNA of two strands and returns the percentage of the two strands that are the same
    compareDNA(object) {
      let count = 0
      for (let i = 0; i <= 14; i++) {
        if (this.dna[i] === object.dna[i]) {
          count++
        }
      }
     let percent = ((count / 15) * 100).toFixed()
     return `Specimen ${this.specimenNum} and specimen ${object.specimenNum} have n${percent}% of their DNA in common.`
    },
    //Determines if at least 60% of the DNA contains 'C' or 'G' bases
    willLikelySurvive() {
      let count = 0
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          count++
        }
      }
      if ((count / 15) >= .60) {
        return true
      } else {
        return false
      }
    }
  }     
}
//Creates array of 30 specimens that are suitable to study
