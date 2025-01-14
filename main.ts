/**
 * Control micro servos
 */
//% color="#03AA74" weight=24 icon="\uf021" blockGap=8
//% blockId="servos" block="舵机模块"
namespace servos {
    //% weight=50
    //% blockId=servoservosetangle18 block="设置180°舵机 %servo 角度 %degrees °"
    //% degrees.defl=90
    //% blockGap=8
    export function Servo_angle(servo: AnalogPin, degrees: number = 90): void {
        // send pulse
        pins.servoSetPulse(servo, Math.map(degrees, 0, 180, 500, 2500))
    }
    //% weight=30
    //% blockId=servoservosetangle36 block="设置360°舵机 %servo 角度 %degrees °"
    //% degrees.defl=180
    //% blockGap=8
    export function Servo_360angle(servo: AnalogPin, degrees: number = 180): void {
        // send pulse
        pins.servoSetPulse(servo, Math.map(degrees, 0, 360, 500, 2500))
    }

    //% weight=10
    //% blockId=servoservosetpulse block="设置舵机 %servo2 脉冲为 %pulse 微秒(μs)"
    //% pulse.defl=1500
    //% blockGap=8
    export function Servo_pulse(servo2: AnalogPin, pulse: number = 1500): void {
        // send pulse
        pins.servoSetPulse(servo2, pulse)
    }
}
