import ProductCard from './ProductCard'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { URL } from '../utils/URL'

export default function Test(){
    const [refrigerator, setRefrigerator] = useState()

    useEffect(() => {
      axios.post(`${URL}/home-cat`, {category:'refrigerator'})
      .then((res) => setRefrigerator(res.data))
    }, [])

  return(
    <>
        <h3 className="py-4">Refrigerators</h3>
        <div className="test">
          <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAQIHAP/EADYQAAIBAwIEAwUHBAMBAAAAAAECAwAEERIhBTFBUQYTYSJxgZHBFDJSobHR8AczQmIjQ+EV/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAhEQACAgEEAgMAAAAAAAAAAAAAAQIRMQMSISIyQSNRYf/aAAwDAQACEQMRAD8Agj4jdNxVYYpEWOJ9CyBHjI6nSCeRGRv391Xm6kS44XHIQrLoKMuM5Ghhj9KqXAzFxG4jZo0MltAVlPl4BfG/vPMfOrIin7OEVJGKyeW2Ad9LAcum2PlVQwKWQ9CTwu4IXIVde422UHH5VJflpbWYRgmSNdSDmSQQeXXlWeDW08vB9M3ssV04JycgBT+YNNLJES1hdRkmNSWPM7U7FQOlrJNGokGhBnnzwRj61mPhsEMRODI4VRqfspyK24nxK24bHHJdmQRu2nUkZfT6nG+PWltx4s4VEwUXIkBwQ6bowPY9dqW5FUMIpFjFuoYKrrpA9R0/I/KitY1hgNiBn6H+d6pQ8a8LR4rdQ80iykRxxYZj97SOm+49KsnAuJNxa1kaWJIpI3KOscmtfngb0bkwpoZJGkerQoUsdTYHM962rYDAA5+texQIBnt5Xlt2GkiOUsxJxhcH574rS7sriSbXbTrEpG6lc5Pfn7qY16gDmH9OI4JmnndG8yOTyiSMeyzFWx1zqH5Veb2SK2hnkEiIUHm+0wGrnnmeo2rkdvNc8N8xEup1tpD7IB06wDnPcDO4+dROFaHU662kbdm3IPck7/PPurPfSovZbOtWvG+EWqPHLxS0GZXbJmXkXJ79q2s/EPCBYoV4jbSCMeWRG+rce6uKXdiXBiL48sZVRgD9eW3vrHDrt4eC6li8oxHywx3JY7lvTP0pqdg40X3j3jOz4jetw61MoiUEiXThtWCVxjJ54G/eqTxnS0109vEAH9tkj5A9QD1ycmtuAWReK4uZYzIXkEa91zuST8AKY3FvNY+ZBKigMxYLrAPQgjvkZzvtttUt27ZS+hDwKR7O6h4gE/tEldsjcY3+ddP/AKZXcKxzWMWDGBrVsAajnfbvVLtLcX7pZWntAIDlUPmMx6/hCjr9OdMbS2vPD/GbMwyJKpZdegY9/wBaSzaB4o6+xCgljgDnWa0RlliBzsy1rDIHjVvgc9xzrYyJKxtXs174UAcQnkk8hEuInjdV9odV/YftQ1jA94qmX2UGen5j4fzenXFY4xJMdJJBJ/nyoXhMbvYkJvpJ056+lcilbOlqjEluETIRTtjUw7+6gby2P/x5cINDy5HpgbkU6tnKyaXUhDnJPSpbu1U8OMSZ2ffB6EUKVCasU8HmFpE0TrtIA2cVYONyxDwxdzsok+zR+fEEGT2Pwwc/D0pHdWTJaI6Z2XY9q34NdmeBkicq+cPATtjrsehziqi7QmqHH9PpYZeCxcQjjKzys0RBG4VTvjuKc2PB4rzif2lclom1Mc8s9vWkFkYeHQSR2UCW7NzIB5b7ZPT0ronh/h54fw2KN/7xAaUn8R51rFJsiUmMEC6QVIK42x2qKRRFKsqgeWWzID0OMav3+dRNOLW4WKUhY3z5bY2z29/PbtnsaMIyMEfA1qZmseRqBJPtHc/z1ragrN/KkeGZ8sz/APG2PvDH3feAPiN++DMigDknEYH85jzUtpJxUdxjhNpbGOPzCZdwNs7fvijuCOeI8PguXG8u5+Gx/Sj/ABJwowWPD2CrrYscHlvj6Vw6S9nTqP0CWsS8SUyQR4k/ySpIrOSNnLrhQMYPU/8AlWHwdYLFG8xXkoUbc+9H+IIFFsJEQA5wxxWktPraIjLmijWJZrjSMGPJ2NTtZ8PUvIwVZF5Ov3s088NcOhnnnkmQMijke5rfxTw1Dc20yIFULoAUYHelFNQ3Dk+1A/h/hdvLexytpdEOoDoG6VdMjIBO55etV3wvbqsFwrDY6OXffB/Smv2nSAsodXVsI5TCuff0J5fHaujT5jZlPNBF1BDd2729wgeKQYZT1pbbz3fD5haXeZ4f+m5OxK/hY8i2cc8ZHc5ppqBAYbg8q8yq6lXAZSMEHcGtCbF0oE1zNplJSRFHlgbxyLkg988iB/qe9FcOulvbVZkZSclX05wGBww+YNBXVnKrBIsPGMNHmQrIhBzhW6jYey23rjYJlfiE7PJFPDbSFsTRSSGBhJ1On2s52IIOCCKAB/B/DSlhYwyrgqmqVT0PNh86M45niXG47WIhltwE25ayQT9Pzo7w4NIbPMIMdOp/YVBa2q2/iSY/4lzIPUkZ/UmueK6r9NX5MfWlvHaW6QxfdXr3Peh+LgPYSDtvUry45UNdSarWXO40mtZLqzOOQHwy+k3SY5afrRvGF820zj7jA0t8P58+6zsML9abXYzayj/Ws9J/GXqeYHwIlfPTqNP1plLlkKkalOxXuKU8Bba4JB3Yc/jTUKeearSfUU12AYmezdYTIzw6sRMzbrn/AAbPX8JPPlz5sVYMoKnY8qGvbdbq3eB2K6xjWOYoOCW7spfJuCJ42OI5AcMzfhOdtRGO2TnqcVpZFDV8spA2PQ9jQ0ltZ3miW4tIZm04BkQEgdt/jU6TROwTViQ/4Ns3yNQPFexyP9kELRu2rEhI0nqBgcuvxNAGLPhxtX1JJqBXBBGPdW03D2e6FwsqqQAMac/WjwAMAVmltVUFvIP5GOua1ktjJG0ewDDGaKrxFNoBdDw0Wzk274VgNQbnkVM0LYK4yDRPWs0lFJcA5XkrNvc/YJnW7AjIbS3bc+z9PnTlLmKSMNExYHbYZx76LlginjMc0aujc1YZBrWG3hgUiGNUBOSAKmMaKcrB5oXB82JyrD7wAyCPUftg16VGfEc0CTRTAh8cjgdj+/SjcCgxmKTy1JKxyKUz01ZBHu3OKsQvt5VtZU4XxCVbmKZiLUzj222J8ttXNgAcHqB1IOT1hi0gRTyxKNtBbGPgwyKIureK7haG4QPG3MH8iDzB9RuKWcJvZpYJo5yJTb3EkAkce0wViAT60gP/2Q==' alt='test' />
          <img src='data:image/jpeg;base64,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' alt='test' />
          <img src='data:image/jpeg;base64,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' alt='test' />
          <img src='data:image/jpeg;base64,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' alt='test' />
          <img src='data:image/jpeg;base64,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' alt='test' />
          <img src='data:image/jpeg;base64,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' alt='test' />
          {/* {refrigerator?.map((ev) => (
            <ProductCard
              key={ev._id}
              id={ev._id}
              name={ev.name}
              price={ev.price}
              images_title={ev.images.title}
              images_others={ev.images.others}
              color={ev.color}
            />
          ))} */}
        </div>
    </>
  )
}


