
import { useState, useRef } from "react";
import back from './utilities/back1.jpg'

const Tictactoe = ({fromTic}) => {

    const init=[["", " ", "  "], ["   ", "  ", ""], [" ", "", " "]]
    const [arr, setarr] = useState(init)
    const ref = useRef(false)
    const [winner,setwinner]=useState('')
   
    

    const Checked = () => {

        if (arr[0][0] === arr[0][1] && arr[0][1] === arr[0][2]) {
            
            setwinner(arr[0][0])
            setarr(init)
        }
        else if (arr[1][0] === arr[1][1] && arr[1][1] === arr[1][2]) {
            
            setwinner(arr[1][0])
            setarr(init)
        }
        else if (arr[2][0] === arr[2][1] && arr[2][1] === arr[2][2]) {
            
            setwinner(arr[2][0])
            setarr(init)
        }


        else if (arr[0][0] === arr[1][0] && arr[1][0] === arr[2][0]) {
            
            setwinner(arr[0][0])
            setarr(init)
        }
        else if (arr[0][1] === arr[1][1] && arr[1][1] === arr[2][1]) {
            
            setwinner(arr[0][1])
            setarr(init)
        }
        else if (arr[0][2] === arr[1][2] && arr[1][2] === arr[2][2]) {
            
            setwinner(arr[0][2])
            setarr(init)
        }

        else if (arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]) {
            
            setwinner(arr[0][0])
            setarr(init)
        }
        else if (arr[2][0] === arr[1][1] && arr[1][1] === arr[0][2]) {
            
            setwinner(arr[2][0])
            setarr(init)
        }

        else{

            let f=0
            for(let i =0;i<3;i++){
                for (let j=0;j<3;j++){
                    if (arr[i][j]!=='X' && arr[i][j]!=='O'){
                        f=1 
                    }
                }
            }
            if (f===0){
                
                setwinner('tie')
                setarr(init)
            }
        }

    }

    const Clicked = (rowId, colId) => {
        
        if (arr[rowId][colId] !== 'X' && arr[rowId][colId] !== 'O') {

            setarr([...arr, arr[rowId][colId] = ref.current ? 'O' : 'X'])
            ref.current = !ref.current
            setTimeout(()=>{
                Checked()
            },3000)
        }
    }
    const bacty=()=>{
       
        fromTic()
    }
    const Resetsudoku=()=>{
        setarr(init)
        setwinner('')

    }

    return (
        <>
        
        <div className="homeButton">
    

        <img src={back} className="backSymbol" alt="no imag found" onClick={()=>bacty()}/>
        
        </div>
            <div className='TicClass' >
                <h1 className="text text-info"> Tic Tac Toe </h1><br/>

                <table className="tictable">
                    <tbody>
                        {
                            [0,1,2].map((row,rowId)=>{
                                return (
                                    <tr key={rowId} className={"whiteticbrd"} >
                                        {
                                            [0,1,2].map((col,colId)=>{
                                                return (
                                                    <td key={rowId+colId} className={"whiteticcbrd"}>
                            <button className="Buttonsize" onClick={()=>Clicked(rowId,colId)}>
                                 <p className={arr[row][colId]==='X'?"blue":'pink'}>
                                     {arr[row][colId]?arr[row][colId]+' ':''}</p>   </button>
                            </td>
                                                )
                                            })
                                        }

                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>
                
                        {winner===''?<h3 className="turn"> Player {ref.current?'O':'X'}'s Turn</h3>:
                        winner==='X'?<h3 className="turn"> Player {winner} won the Game</h3>:
                        winner==='O'?<h3 className="turn"> Player {winner} won the Game</h3>:
                                    <h3 className="turn"> Game is Tie</h3>
                        }
                
                
                <div className="buttonContainerr">

                       
                        <button className="resetSize" onClick={Resetsudoku}>Reset</button>

               </div>

            </div>

        </>
    )
}

export default Tictactoe