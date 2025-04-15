/**
 * Control micro servos
 */
//% color="#03AA74" weight=24 icon="\uf021" blockGap=8
//% blockId="servos" block="舵机模块"
namespace servos {
    //% weight=50
    //% blockId=servoservosetangle18 block="设置180°舵机 %servo 角度 %degrees °"
    //% degrees.defl=90
    //% degrees.min=0 degrees.max=180
    //% blockGap=8
    export function Servo_angle(servo: AnalogPin, degrees: number = 90): void {
        // send pulse
        pins.servoSetPulse(servo, Math.map(degrees, 0, 180, 500, 2500))
    }
    //% weight=30
    //% blockId=servoservosetpulse block="设置舵机 %servo2 脉冲为 %pulse 微秒(μs)"
    //% pulse.defl=1500
    //% pulse.min=500 pulse.max=2500
    //% blockGap=8
    export function Servo_pulse(servo2: AnalogPin, pulse: number = 1500): void {
        // send pulse
        pins.servoSetPulse(servo2, pulse)
    }
    //% weight=20
    //% blockId=servoservosetspeed36 block="设置360°舵机 %servo 速度 %speed ％"
    //% speed.defl=50
    //% speed.min=-100 speed.max=100
    //% blockGap=8
    export function Servo_360speed(servo: AnalogPin, speed: number = 50): void {
        // send pulse
        if(speed > 0 || speed == 0) pins.servoSetPulse(servo, Math.map(speed, 0, 100, 1300, 2500))
        else if(speed < 0) pins.servoSetPulse(servo, Math.map(speed, -100, -1, 500, 1200))
        
    }
    //% weight=10
    //% blockId=servoservosetstop36 block="设置360°舵机 %servo 停止 "
    //% blockGap=8
    export function Servo_360stop(servo: AnalogPin): void {
        // send pulse
        pins.servoSetPulse(servo, 0)
    }

}
